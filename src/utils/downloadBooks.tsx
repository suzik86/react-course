import { IBook } from "../interfaces";

export default function downloadBooks(selectedBooks: IBook[]) {
  const selectedBooksData = selectedBooks.map((book) => ({
    title: book.title,
    publishedYear: book.publishedYear
      ? `was published in ${book.publishedYear}`
      : "",
    numberOfPages: book.numberOfPages ? `${book.numberOfPages} pages` : "",
  }));
  const csvContent = `data:text/csv;charset=utf-8,${selectedBooksData
    .map((book, i) => {
      const bookInfo = Object.values(book).join(", ");
      return `${(i + 1).toString()}. ${bookInfo}`;
    })
    .join("\n")}`;
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.href = encodedUri;
  link.download = `${selectedBooks.length}_books.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
