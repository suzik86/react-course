import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import "whatwg-fetch";
import BooksList from "../components/booksList/BooksList";
import { AppStore, setupStore } from "../store/store";
import { BookListMock } from "./mocks/BookListMock";

let store: AppStore;

describe("BookList component", () => {
  test("Verify that the component renders the specified number of cards", async () => {
    store = setupStore({
      currentPageItems: {
        currentPageItems: BookListMock.books,
      },
      selectedBooks: {
        selectedBooks: [],
      },
    });

    const props = {
      totalPages: 2,
      currentPage: 0,
      list: BookListMock.books,
    };

    const { container } = render(
      <Provider store={store}>
        <BooksList {...props} />
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
      list: [],
    };

    store = setupStore({
      currentPageItems: {
        currentPageItems: [],
      },
      selectedBooks: {
        selectedBooks: [],
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <BooksList {...props} />
      </Provider>,
    );
    const message = getByText("No matching books");
    expect(message).toBeInTheDocument();
  });

  test("Verify that after clicking on checkbox the number of selected book in the store is increasing", async () => {
    store = setupStore({
      currentPageItems: {
        currentPageItems: BookListMock.books,
      },
      selectedBooks: {
        selectedBooks: [],
      },
    });

    const props = {
      totalPages: 2,
      currentPage: 0,
      list: BookListMock.books,
    };

    const { container } = render(
      <Provider store={store}>
        <BooksList {...props} />
      </Provider>,
    );
    const checkbox = container.querySelectorAll(".book-checkbox")[0];
    expect(checkbox as HTMLElement).toBeInTheDocument();
    fireEvent.click(checkbox as HTMLElement);
    await waitFor(() => {
      expect(store.getState().selectedBooks.selectedBooks.length).toBe(1);
    });
  });
});
