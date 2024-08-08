import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import BookDetails from "../components/bookDetails/BookDetails";
import { AppStore, setupStore } from "../store/store";
import { BookDetailsMock } from "./mocks/BookDetailsMock";

let store: AppStore;

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

jest.mock("../utils/useOutsideAlerter", () => jest.fn());

describe("BookDetails component", () => {
  beforeEach(() => {
    store = setupStore();
  });

  test("Check that the book details are displayed", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BookDetails dataByIdFromServer={BookDetailsMock} />
      </Provider>,
    );

    expect(getByText("A Choice of Futures")).toBeInTheDocument();
    expect(document.querySelector(".book_details")).toBeInTheDocument();
  });

  test("Check that the router.back function is called when the Close button is clicked", () => {
    const useRouter = jest.spyOn(require("next/navigation"), "useRouter");

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
