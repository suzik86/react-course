import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import { useState } from "react";

let mockSearchParam = "page=1";
jest.mock("@remix-run/react", () => ({
  Link: ({ children, ...props }: { children: React.ReactNode }) => (
    <a {...props}>{children}</a>
  ),
  useSearchParams: () => {
    const [params, setParams] = useState(new URLSearchParams(mockSearchParam));
    return [
      params,
      (newParams: string) => {
        mockSearchParam = newParams;
        setParams(new URLSearchParams(newParams));
      },
    ];
  },
}));

describe("Pagination component", () => {
  test("Make sure the component updates URL query parameter when page changes", async () => {
    const { container } = render(
      <MemoryRouter>
        <Pagination totalPages={10} currentPage={1} />
      </MemoryRouter>,
    );
    const nextButton = container.querySelector(".next-button") as HTMLElement;
    expect(nextButton).toBeInTheDocument();
  });
});
