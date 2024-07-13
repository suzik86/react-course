import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookDetails from "../components/pages/main/components/bookDetails/BookDetails";
import { BookDetailsMock } from "./mocks/BookDetailsMock";
import { mockFetch } from "./mocks/MockFetch";

describe("BookDetails component", () => {
  beforeEach(() => {
    window.fetch = mockFetch(BookDetailsMock) as jest.Mock;
  });

  test("Check that a loading indicator is displayed while fetching data", async () => {
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>,
    );
    expect(document.querySelector(".loader")).toBeInTheDocument();
    await waitFor(() => {
      expect(document.querySelector(".loader")).not.toBeInTheDocument();
    });
  });

  test("Make sure the detailed card component correctly displays the detailed card data", async () => {
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>,
    );
    const bookTitle = await screen.findByText("A Choice of Futures");
    expect(bookTitle).toBeInTheDocument();
    expect(await screen.findByText("2013")).toBeInTheDocument();
  });
});
