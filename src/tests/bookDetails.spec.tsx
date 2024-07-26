import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "whatwg-fetch";
import BookDetails from "../components/bookDetails/BookDetails";
import { BookDetailsMock } from "./mocks/BookDetailsMock";
import { AppStore, setupStore } from "../store/store";

fetchMock.enableMocks();
let store: AppStore;

describe("BookDetails component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    store = setupStore();
  });

  test("Check that a loading indicator is displayed while fetching data", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <BookDetails />
        </MemoryRouter>
      </Provider>,
    );
    expect(document.querySelector(".loader")).toBeInTheDocument();
    await waitFor(() => {
      expect(document.querySelector(".loader")).not.toBeInTheDocument();
    });
  });

  test("Make sure the detailed card component correctly displays the detailed card data", async () => {
    fetchMock.mockResponse(() =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify(BookDetailsMock),
      }),
    );

    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useParams: jest.fn(() => ({
        uid: "BOMA0000168934",
      })),
    }));

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <BookDetails />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => {
      expect(getByText("A Choice of Futures")).toBeInTheDocument();
      expect(document.querySelector(".book-details")).toBeInTheDocument();
    });
  });
});
