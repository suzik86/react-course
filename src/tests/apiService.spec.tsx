import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";
import { getBookDetails, getBooks } from "../services/ApiService";
import { BookDetailsMock } from "./mocks/BookDetailsMock";
import { BookListMock } from "./mocks/BookListMock";

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("ApiService", () => {
  test("check if getBooks function works correctly without searchTerm", async () => {
    fetchMock.mockOnceIf(
      "https://stapi.co/api/v2/rest/book/search?pageNumber=0&pageSize=10",
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify(BookListMock),
        }),
    );

    const data = await getBooks(0);

    expect(fetchMock.mock.calls.length).toBe(1);
    expect(data).toEqual(BookListMock);
  });

  test("check if getBooks function works correctly with searchTerm", async () => {
    fetchMock.mockOnceIf(
      "https://stapi.co/api/v2/rest/book/search?pageNumber=0&pageSize=10",
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify(BookListMock),
        }),
    );

    const data = await getBooks(0, "test");

    expect(fetchMock.mock.calls.length).toBe(1);
    expect(data).toEqual(BookListMock);
  });

  test("check if getBookDetails function works correctly", async () => {
    fetchMock.mockOnceIf(
      "https://stapi.co/api/v2/rest/book?uid=BOMA0000168934",
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify(BookDetailsMock),
        }),
    );

    const data = await getBookDetails("BOMA0000168934");

    expect(fetchMock.mock.calls.length).toBe(1);
    expect(data).toEqual(BookDetailsMock);
  });

  test("check if getBookDetails function throws an error when fetch fails", async () => {
    fetchMock.mockOnceIf(
      "https://stapi.co/api/v2/rest/book?uid=BOMA0000168934",
      () =>
        Promise.resolve({
          status: 500,
          body: "Internal Server Error",
        }),
    );

    await expect(getBookDetails("BOMA0000168934")).rejects.toThrow(
      "Failed to fetch data",
    );
    expect(fetchMock.mock.calls.length).toBe(1);
  });
});
