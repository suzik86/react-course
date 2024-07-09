import { IResponse } from "../interfaces";

const BASE_URL = "https://stapi.co/api/v2/rest";

export const getBooks = async (searchTerm: string, pageNumber: number = 0) => {
  try {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "title=" + searchTerm,
    };
    const response = await fetch(
      `${BASE_URL}/book/search?pageNumber=${pageNumber}&pageSize=10`,
      config,
    );
    const json = (await response.json()) as IResponse;
    if (response.ok) {
      return { books: json.books || [], totalPages: json.page.totalPages || 0 };
    }
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const apiService = { getBooks };
