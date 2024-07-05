import { BookInterface } from "./BookInterface";

export interface ResponseInterface {
  page: {
    pageNumber: number;
    pageSize: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
    firstPage: boolean;
    lastPage: boolean;
  };
  sort: {
    clauses: string[];
  };
  books: BookInterface[];
}
