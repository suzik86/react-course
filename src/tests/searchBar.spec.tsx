import "whatwg-fetch";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "../components/pages/main/components/searchBar/SearchBar";
import MainPage from "../components/pages/main/MainPage";
import { BookListMock } from "./mocks/BookListMock";
import { localStorageMock } from "./mocks/LocalStorageMock";
import { store } from "../store/store";
import { Provider } from "react-redux";

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
      />
    );
    const searchInput = document.querySelector(
      ".search-input"
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
      })
    ) as jest.Mock;
    localStorageMock.setItem("searchTerm", JSON.stringify("testSearchTerm"));

    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
    waitFor(() => {
      const searchInput = document.querySelector(
        ".search-input"
      ) as HTMLInputElement;
      expect(searchInput).toBeInTheDocument();
      expect(searchInput.value).toBe("testSearchTerm");
    });
  });
});
