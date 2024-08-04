import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
//import { Provider } from "react-redux";
//import { MemoryRouter } from "react-router-dom";
import "whatwg-fetch";
import SearchBar from "../components/searchBar/SearchBar";
//import MainPage from "../components/mainPage/MainPage";
//import { AppStore, setupStore } from "../store/store";
//import { BookListMock } from "./mocks/BookListMock";
import { localStorageMock } from "./mocks/LocalStorageMock";

fetchMock.enableMocks();
//let store: AppStore;

describe("SearchBar component", () => {
  beforeEach(() => {
    localStorageMock.clear();
    fetchMock.resetMocks();
    //store = setupStore();
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

  // test("Check that the component retrieves the value from the local storage upon mounting", () => {
  //   fetchMock.mockResponse(() =>
  //     Promise.resolve({
  //       status: 200,
  //       body: JSON.stringify(BookListMock),
  //     }),
  //   );
  //   localStorageMock.setItem("searchTerm", JSON.stringify("testSearchTerm"));

  //   render(
  //     <Provider store={store}>
  //       <MemoryRouter>
  //         <MainPage />
  //       </MemoryRouter>
  //     </Provider>,
  //   );
  //   waitFor(() => {
  //     const searchInput = document.querySelector(
  //       ".search-input",
  //     ) as HTMLInputElement;
  //     expect(searchInput).toBeInTheDocument();
  //     expect(searchInput.value).toBe("testSearchTerm");
  //   });
  // });
});
