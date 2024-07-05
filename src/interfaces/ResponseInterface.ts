import { IBook } from "./BookInterface";

export interface IResponse {
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
  books: IBook[];
}
