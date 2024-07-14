import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Book from "../components/pages/main/components/book/Book";
import BookDetails from "../components/pages/main/components/bookDetails/BookDetails";
import { BookDetailsMock } from "./mocks/BookDetailsMock";
import { bookMock } from "./mocks/BookMock";
import { mockFetch } from "./mocks/MockFetch";

describe("Book component", () => {
  beforeEach(() => {
    window.fetch = mockFetch(BookDetailsMock) as jest.Mock;
  });

  test("Ensure that the card component renders the relevant card data", () => {
    render(
      <MemoryRouter>
        <Book book={bookMock} currentPage={0} />
      </MemoryRouter>,
    );
    const titleElement = screen.getByText(bookMock.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("Validate that clicking on a card opens a detailed card component", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Book book={bookMock} currentPage={0} />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </MemoryRouter>,
    );
    const bookLinkElement = document.querySelector(".book-link");
    expect(bookLinkElement).toBeInTheDocument();
    fireEvent.click(bookLinkElement as HTMLElement);
    await waitFor(() => {
      expect(document.querySelector(".book-details")).toBeInTheDocument();
    });
  });

  test("Check that clicking on the card triggers an additional API call to fetch detailed information.", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Book book={bookMock} currentPage={0} />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </MemoryRouter>,
    );
    const bookCardElement = document.querySelector(".book-card");
    expect(bookCardElement).toBeInTheDocument();
    fireEvent.click(bookCardElement as HTMLElement);
    await waitFor(() => {
      expect(window.fetch).toHaveBeenCalledTimes(1);
    });
  });
});
