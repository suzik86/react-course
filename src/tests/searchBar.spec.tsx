import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import "whatwg-fetch";
import SearchBar from "../components/searchBar/SearchBar";
import MainPage from "../pages/main/MainPage";
import { BookListMock } from "./mocks/BookListMock";
import { localStorageMock } from "./mocks/LocalStorageMock";
import { setupStore } from "../store/store";

describe("SearchBar component", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  test("Verify that clicking the Search button saves the entered value to the local storage", () => {
    render(
      <SearchBar
        searchTerm={""}
        setSearchTerm={(term) => {
          localStorageMock.setItem("searchTerm", term);
        }}
      />,
    );
    const searchInput = document.querySelector(
      ".search-input",
    ) as HTMLInputElement;
    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "test" } });
    fireEvent.click(searchButton);
    expect(searchInput.value).toBe("test");
    expect(localStorageMock.getItem("searchTerm")).toBe("test");
  });

  test("Check that the component retrieves the value from the local storage upon mounting", () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(BookListMock),
        ok: true,
      }),
    ) as jest.Mock;
    localStorageMock.setItem("searchTerm", JSON.stringify("testSearchTerm"));
    const store = setupStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>,
    );
    waitFor(() => {
      const searchInput = document.querySelector(
        ".search-input",
      ) as HTMLInputElement;
      expect(searchInput).toBeInTheDocument();
      expect(searchInput.value).toBe("testSearchTerm");
    });
  });
});
