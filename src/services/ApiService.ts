import { IResponse } from "../interfaces";

const BASE_URL = "https://stapi.co/api/v2/rest";

export class ApiService {
  async getBooks(searchTerm: string) {
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "title=" + searchTerm,
      };
      const response = await fetch(`${BASE_URL}/book/search`, config);
      const json = (await response.json()) as IResponse;
      if (response.ok) {
        return json.books;
      }
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}

export const apiService = new ApiService();
