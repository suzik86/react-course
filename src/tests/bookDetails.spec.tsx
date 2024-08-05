import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import BookDetails from "../components/bookDetails/BookDetails";
import { AppStore, setupStore } from "../store/store";
import { BookDetailsMock } from "./mocks/BookDetailsMock";

let store: AppStore;
const useRouter = jest.spyOn(require("next/router"), "useRouter");

// Mock the useOutsideAlerter hook
jest.mock("../utils/useOutsideAlerter", () => jest.fn());

describe("BookDetails component", () => {
  beforeEach(() => {
    store = setupStore();
  });

  test("Check that the book details are displayed", () => {
    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));

    const { getByText } = render(
      <Provider store={store}>
        <BookDetails dataByIdFromServer={BookDetailsMock} />
      </Provider>,
    );

    expect(getByText("A Choice of Futures")).toBeInTheDocument();
    expect(document.querySelector(".book_details")).toBeInTheDocument();
  });

  test("Check that the router.back function is called when the Close button is clicked", () => {
    // Mock the useRouter hook to return a mock function for router.back
    useRouter.mockImplementation(() => ({
      back: jest.fn(),
    }));

    const { getByText } = render(
      <Provider store={store}>
        <BookDetails dataByIdFromServer={BookDetailsMock} />
      </Provider>,
    );

    const closeButtonElement = getByText("X");
    fireEvent.click(closeButtonElement);
    expect(useRouter).toHaveBeenCalled();
  });
});
