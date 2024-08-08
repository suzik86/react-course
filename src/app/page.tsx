import { cache, Suspense } from "react";
import Loader from "../components/loader/Loader";
import HomePage from "./home-page";

export const getBooks = cache(async (page = 0, searchTerm = "") => {
  let res, dataFromServer;
  if (searchTerm) {
    res = await fetch(
      `https://stapi.co/api/v2/rest/book/search?pageNumber=${page}&pageSize=10`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `title=${searchTerm}`,
      },
    );
    dataFromServer = await res.json();
  } else {
    res = await fetch(
      `https://stapi.co/api/v2/rest/book/search?pageNumber=${page}&pageSize=10`,
    );
    dataFromServer = await res.json();
  }
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return dataFromServer;
});

export default async function Page({
  searchParams: { page, searchTerm },
}: {
  searchParams: { page: number; searchTerm: string };
}) {
  const data = await getBooks(page, searchTerm);
  return (
    <Suspense fallback={<Loader />}>
      <HomePage dataFromServer={data} />
    </Suspense>
  );
}
