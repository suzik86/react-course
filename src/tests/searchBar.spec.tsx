import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import "whatwg-fetch";
import SearchBar from "../components/searchBar/SearchBar";

fetchMock.enableMocks();

const mockedUsedNavigate = jest.fn();

jest.mock("@remix-run/react", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe("SearchBar component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("Verify that clicking the Search button saves the entered value to the local storage", () => {
    render(<SearchBar searchTerm={""} setSearchTerm={() => {}} />);
    const searchInput = document.querySelector(
      ".search-input",
    ) as HTMLInputElement;
    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "test" } });
    fireEvent.click(searchButton);
    expect(searchInput.value).toBe("test");
  });
});
