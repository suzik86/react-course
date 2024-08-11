import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Book from "../components/book/Book";
import { ThemeContext } from "../ThemeContext";
import { BookMock } from "./mocks/BookMock";

describe("Book component", () => {
  test("Ensure that the card component renders the relevant card data", () => {
    render(<Book book={BookMock} currentPage={0} searchTerm="" />);
    const titleElement = screen.getByText(BookMock.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("Ensure that the card component renders with the correct theme", () => {
    const theme = "light";
    render(
      <ThemeContext.Provider value={theme}>
        <Book book={BookMock} currentPage={0} searchTerm="" />
      </ThemeContext.Provider>,
    );
    const cardTitleElement = document.querySelector(".book_card div");
    expect(cardTitleElement).toBeInTheDocument();
    expect(cardTitleElement).toHaveClass("light_book_title");
  });

  test("Ensure that the card component has the correct link", () => {
    const searchTerm = "react";
    const currentPage = 1;
    render(
      <Book
        book={BookMock}
        currentPage={currentPage}
        searchTerm={searchTerm}
      />,
    );
    const linkElement = document.querySelector(".book_link");
    expect(linkElement).toHaveAttribute(
      "href",
      `/book/${BookMock.uid}?searchTerm=${searchTerm}&page=${currentPage}`,
    );
  });
});
