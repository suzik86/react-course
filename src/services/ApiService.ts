import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook, IResponse } from "../interfaces";

const BASE_URL = "https://stapi.co/api/v2/rest";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<IResponse, { searchTerm: string; page?: number }>({
      query: ({ searchTerm, page = 0 }) => ({
        url: `/book/search?pageNumber=${page}&pageSize=10`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `title=${searchTerm}`,
      }),
      transformResponse: (response: IResponse) => ({
        books: response.books || [],
        totalPages: response.page.totalPages || 0,
        page: response.page,
        sort: response.sort,
      }),
      providesTags: ["Books"],
    }),
    getBookById: builder.query<IBook, string>({
      query: (bookId) => `/book?uid=${bookId}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
}: {
  useGetBooksQuery: CallableFunction;
  useGetBookByIdQuery: CallableFunction;
} = api;
