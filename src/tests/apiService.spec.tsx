import "whatwg-fetch";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetBookByIdQuery, useGetBooksQuery } from "../services/ApiService";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "../store/store";
import fetchMock from "jest-fetch-mock";
import { BookListMock } from "./mocks/BookListMock";
import { BookDetailsMock } from "./mocks/BookDetailsMock";

fetchMock.enableMocks();

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("ApiService", () => {
  test("check if useGetBookByIdQuery hook works correctly", async () => {
    fetchMock.mockOnceIf(
      "https://stapi.co/api/v2/rest/book?uid=BOMA0000168934",
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify(BookDetailsMock),
        }),
    );

    const { result } = renderHook(() => useGetBookByIdQuery("BOMA0000168934"), {
      wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "getBookById",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock.mock.calls.length).toBe(1);

    expect(result.current).toMatchObject({
      status: "fulfilled",
      endpointName: "getBookById",
      data: BookDetailsMock,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: {},
      isFetching: false,
    });
  });

  test("check if useGetBooksQuery hook works correctly", async () => {
    fetchMock.mockOnceIf(
      "https://stapi.co/api/v2/rest/book/search?pageNumber=0&pageSize=10",
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify(BookListMock),
        }),
    );

    const { result } = renderHook(() => useGetBooksQuery("test", 0), {
      wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "getBooks",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock.mock.calls.length).toBe(1);

    expect(result.current).toMatchObject({
      status: "fulfilled",
      endpointName: "getBooks",
      data: BookListMock,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: {},
      isFetching: false,
    });
  });
});
