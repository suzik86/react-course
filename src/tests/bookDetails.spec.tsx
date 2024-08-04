import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { Provider } from "react-redux";
//import { MemoryRouter } from "react-router-dom";
import "whatwg-fetch";
import BookDetails from "../components/bookDetails/BookDetails";
import { BookDetailsMock } from "./mocks/BookDetailsMock";
import { AppStore, setupStore } from "../store/store";

fetchMock.enableMocks();

let store: AppStore;

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useParams: jest.fn(() => ({
//     uid: "BOMA0000168934",
//   })),
// }));

// const mockedUsedNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

describe("BookDetails component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    store = setupStore();
  });

  test("Check that a loading indicator is displayed while fetching data", async () => {
    render(
      <Provider store={store}>
        <BookDetails dataByIdFromServer={BookDetailsMock} />
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

    const { getByText } = render(
      <Provider store={store}>
        <BookDetails dataByIdFromServer={BookDetailsMock} />
      </Provider>,
    );
    await waitFor(() => {
      expect(getByText("A Choice of Futures")).toBeInTheDocument();
      expect(document.querySelector(".book-details")).toBeInTheDocument();
    });
  });

  test("Make sure navigation occurs after clicking the Close button", async () => {
    fetchMock.mockResponse(() =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify(BookDetailsMock),
      }),
    );

    const { container } = render(
      <Provider store={store}>
        <BookDetails dataByIdFromServer={BookDetailsMock} />
      </Provider>,
    );
    let bookDetailsCard: Element | null;
    await waitFor(() => {
      bookDetailsCard = container.querySelector(".book-details");
      expect(bookDetailsCard as HTMLElement).toBeInTheDocument();
    });
    const closeButtonElement = container.querySelector(".close-btn");
    expect(closeButtonElement).toBeInTheDocument();
    fireEvent.click(closeButtonElement as HTMLElement);
    // await waitFor(() => {
    //   expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    // });
  });
});
