import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import "whatwg-fetch";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchBar from "../components/searchBar/SearchBar";

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

describe("SearchBar component", () => {
  test("Verify that the input value is updated correctly", () => {
    mockRouter.push("/");
    render(<SearchBar searchTerm={""} setSearchTerm={() => {}} />);
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      "Enter book title...",
    );
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });

  test("Verify that the search term is updated correctly when submitting the form", () => {
    const setSearchTermMock = jest.fn();
    render(<SearchBar searchTerm={""} setSearchTerm={setSearchTermMock} />);
    const searchInput = screen.getByPlaceholderText("Enter book title...");
    const searchButton = screen.getByText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    fireEvent.click(searchButton);
    expect(setSearchTermMock).toHaveBeenCalledWith("test");
  });

  test("Verify that clicking the 'Throw error' button throws an error", () => {
    render(
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <SearchBar searchTerm={""} setSearchTerm={() => {}} />,
      </ErrorBoundary>,
    );
    const throwErrorButton = screen.getByText("Throw error");
    expect(throwErrorButton).toBeInTheDocument();
    fireEvent.click(throwErrorButton);
    const errorMsg = screen.getByText("Something went wrong");
    expect(errorMsg).toBeInTheDocument();
  });
});
