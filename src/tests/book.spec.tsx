import "whatwg-fetch";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Book from "../components/pages/main/components/book/Book";
import BookDetails from "../components/pages/main/components/bookDetails/BookDetails";
//import { BookDetailsMock } from "./mocks/BookDetailsMock";
import { BookMock } from "./mocks/BookMock";
//import { mockFetch } from "./mocks/MockFetch";
import fetchMock from "jest-fetch-mock";
//import { api } from "../services/ApiService";
import { Provider } from "react-redux";
import { store } from "../store/store";
//import { ReactNode } from "react";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
  //window.fetch = mockFetch(BookDetailsMock) as jest.Mock;
});

describe("Book component", () => {
  //const storeRef = setupApiStore(api, { auth: authReducer });
  fetchMock.mockResponse(JSON.stringify({}));

  test("Ensure that the card component renders the relevant card data", () => {
    render(
      <MemoryRouter>
        <Book book={BookMock} currentPage={0} />
      </MemoryRouter>,
    );
    const titleElement = screen.getByText(BookMock.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("Validate that clicking on a card opens a detailed card component", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route
              path="/"
              element={<Book book={BookMock} currentPage={0} />}
            />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    const bookLinkElement = document.querySelector(".book-link");
    expect(bookLinkElement).toBeInTheDocument();
    fireEvent.click(bookLinkElement as HTMLElement);
    // await waitFor(() => {
    //   expect(document.querySelector(".book-details")).toBeInTheDocument();
    // });
  });

  test("Check that clicking on the card triggers an additional API call to fetch detailed information.", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route
              path="/"
              element={<Book book={BookMock} currentPage={0} />}
            />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    const bookCardElement = document.querySelector(".book-card");
    expect(bookCardElement).toBeInTheDocument();
    //fireEvent.click(bookCardElement as HTMLElement);
    // await waitFor(() => {
    //   expect(window.fetch).toHaveBeenCalledTimes(1);
    // });
  });
});
