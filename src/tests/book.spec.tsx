import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// import { MemoryRouter, Route, Routes } from "react-router-dom";
import { BookMock } from "./mocks/BookMock";
import fetchMock from "jest-fetch-mock";
//import { Provider } from "react-redux";
import Book from "../components/book/Book";
//import BookDetails from "../components/bookDetails/BookDetails";
//import { BookDetailsMock } from "./mocks/BookDetailsMock";
//import { AppStore, setupStore } from "../store/store";

fetchMock.enableMocks();
//let store: AppStore;

beforeEach(() => {
  fetchMock.resetMocks();
  //store = setupStore();
});

describe("Book component", () => {
  test("Ensure that the card component renders the relevant card data", () => {
    render(<Book book={BookMock} currentPage={0} searchTerm="" />);
    const titleElement = screen.getByText(BookMock.title);
    expect(titleElement).toBeInTheDocument();
  });

  // test("Validate that clicking on a card opens a detailed card component", async () => {
  //   fetchMock.mockResponse(() =>
  //     Promise.resolve({
  //       status: 200,
  //       body: JSON.stringify(BookDetailsMock),
  //     }),
  //   );

  //   // jest.mock("react-router-dom", () => ({
  //   //   ...jest.requireActual("react-router-dom"),
  //   //   useParams: jest.fn(() => ({
  //   //     uid: "BOMA0000168934",
  //   //   })),
  //   // }));

  //   render(
  //     <Provider store={store}>
  //       <Book book={BookMock} currentPage={0} />
  //     </Provider>,
  //   );
  //   const titleElement = screen.getByText(BookMock.title);
  //   expect(titleElement).toBeInTheDocument();
  //   const bookLinkElement = document.querySelector(".book-link");
  //   expect(bookLinkElement).toBeInTheDocument();
  //   fireEvent.click(bookLinkElement as HTMLElement);
  //   await waitFor(() => expect(fetchMock.mock.calls.length).toBe(1));
  //   await waitFor(() => {
  //     expect(document.querySelector(".book-details")).toBeInTheDocument();
  //   });
  // });

  // test("Check that clicking on the card triggers an additional API call to fetch detailed information.", async () => {
  //   render(
  //     <Provider store={store}>
  //         <Book book={BookMock} currentPage={0} />
  //     </Provider>,
  //   );
  //   const bookCardElement = document.querySelector(".book-card");
  //   expect(bookCardElement).toBeInTheDocument();
  //   fireEvent.click(bookCardElement as HTMLElement);
  //   await waitFor(() => {
  //     expect(fetchMock.mock.calls.length).toBe(1);
  //   });
  // });
});
