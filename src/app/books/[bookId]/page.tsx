import BookDetails from "../../../components/bookDetails/BookDetails";
import BooksList from "../../../components/booksList/BooksList";
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
  searchParams: {page, searchTerm}
}: {
  params: { bookId: string };
  searchParams: { page: number; searchTerm: string };
}) => {
  const id = bookId;
  const [dataById, data] = await Promise.all([getBookDetails(id), getBooks(page, searchTerm)])
  return (
    <>
      <BooksList totalPages={data?.page.totalPages} currentPage={Number(page)} searchTerm={searchTerm} list={data?.books} />
      <BookDetails dataByIdFromServer={dataById} />
    </>
      
  );
};

export default PageWithDetails;
