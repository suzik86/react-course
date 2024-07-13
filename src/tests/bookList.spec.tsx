import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BooksList from "../components/pages/main/components/booksList/BooksList";
import { FetchStatusEnum } from "../enums/FetchStatusEnum";
import { IBook } from "../interfaces";
import { BookListMock } from "./mocks/BookListMock";

describe("BookList component", () => {
  test("Verify that the component renders the specified number of cards", () => {
    const props = {
      list: BookListMock.books as IBook[],
      fetchStatus: FetchStatusEnum.done,
      totalPages: 2,
      currentPage: 0,
    };
    const { container } = render(
      <MemoryRouter>
        <BooksList {...props} />
      </MemoryRouter>,
    );
    const cards = container.querySelectorAll(".book-card");
    expect(cards.length).toBe(10);
  });

  test("Check that an appropriate message is displayed if no cards are present", () => {
    const props = {
      list: [],
      fetchStatus: FetchStatusEnum.done,
      totalPages: 1,
      currentPage: 0,
    };
    const { getByText } = render(
      <MemoryRouter>
        <BooksList {...props} />
      </MemoryRouter>,
    );
    const message = getByText("No matching books");
    expect(message).toBeInTheDocument();
  });
});
