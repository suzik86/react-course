import BooksList from "../components/booksList/BooksList";

export const getBooks = async (page = 0, searchTerm = "") => {
    const res = await fetch(
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
    const dataFromServer = await res.json();
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return dataFromServer;
};

// лень тип писать
// eslint-disable-next-line @typescript-eslint/no-explicit-any 
export default async function Page({searchParams: { page, searchTerm }}: any) {
  const data = await getBooks(page, searchTerm)
  
  return <BooksList totalPages={data?.page.totalPages} currentPage={Number(page)} searchTerm={searchTerm} list={data?.books} />;
}
