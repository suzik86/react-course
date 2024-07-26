import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BooksList from "../components/booksList/BooksList";
import { BookListMock } from "./mocks/BookListMock";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

describe("BookList component", () => {
  test("Verify that the component renders the specified number of cards", async () => {
    const props = {
      totalPages: 2,
      currentPage: 0,
    };
    const mockStore = configureStore({
      reducer: {
        currentPageItems: () => ({
          currentPageItems: BookListMock.books, // 10 items
        }),
        selectedBooks: () => ({
          selectedBooks: [],
        }),
      },
    });
    const store = mockStore;

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <BooksList {...props} />
        </MemoryRouter>
      </Provider>,
    );
    const cards = container.querySelectorAll(".book-card");
    await waitFor(() => {
      expect(cards.length).toBe(
        store.getState().currentPageItems.currentPageItems.length,
      );
    });
  });
  test("Check that an appropriate message is displayed if no cards are present", () => {
    const props = {
      totalPages: 1,
      currentPage: 0,
    };
    const mockStore = configureStore({
      reducer: {
        currentPageItems: () => ({
          currentPageItems: [],
        }),
        selectedBooks: () => ({
          selectedBooks: [],
        }),
      },
    });
    const store = mockStore;
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <BooksList {...props} />
        </MemoryRouter>
      </Provider>,
    );
    const message = getByText("No matching books");
    expect(message).toBeInTheDocument();
  });
});
