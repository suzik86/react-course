import BookDetails from "../../../components/bookDetails/BookDetails";
import HomePage from "../../home-page";
import { getBooks } from "../../page";

async function getBookDetails(id: string) {
  const res = await fetch(`https://stapi.co/api/v2/rest/book?uid=${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const dataFromServer = await res.json();
  return dataFromServer;
}

const PageWithDetails = async ({
  params: { bookId },
  searchParams: { page, searchTerm },
}: {
  params: { bookId: string };
  searchParams: { page: number; searchTerm: string };
}) => {
  const id = bookId;
  const data = await getBooks(page, searchTerm);
  const dataById = await getBookDetails(id);
  return (
    <HomePage dataFromServer={data}>
      {bookId && <BookDetails dataByIdFromServer={dataById} />}
    </HomePage>
  );
};

export default PageWithDetails;
