import { json } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import React from "react";
import BookDetails from "../../src/components/bookDetails/BookDetails";
import { getBookDetails } from "../../src/services/ApiService";

export const loader = async ({ params }: {params: {bookId: string}}) => {
  const details = await getBookDetails(params.bookId);
  if (!details) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ details });
};

export default function Details() {
  const { details } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading" ? true : false;

  return (
    <BookDetails data={details} isLoading={isLoading} />
  );
}



