import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BookMock } from "./mocks/BookMock";
import Book from "../components/book/Book";
import { useState } from "react";

let mockSearchParam = "page=1";

jest.mock("@remix-run/react", () => ({
  Link: ({ children, ...props }: { children: React.ReactNode }) => (
    <a {...props}>{children}</a>
  ),
  useSearchParams: () => {
    const [params, setParams] = useState(new URLSearchParams(mockSearchParam));
    return [
      params,
      (newParams: string) => {
        mockSearchParam = newParams;
        setParams(new URLSearchParams(newParams));
      },
    ];
  },
}));

describe("Book component", () => {
  test("Ensure that the card component renders the relevant card data", () => {
    render(<Book book={BookMock} currentPage={0} />);
    const titleElement = screen.getByText(BookMock.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("Ensure that the book link has the correct URL", () => {
    render(<Book book={BookMock} currentPage={1} />);
    const bookLinkElement = document.querySelector(".book-link");
    expect(bookLinkElement).toBeInTheDocument();
    expect(bookLinkElement).toHaveAttribute(
      "to",
      `/book/${BookMock.uid}?searchTerm=&page=1`,
    );
  });
});
