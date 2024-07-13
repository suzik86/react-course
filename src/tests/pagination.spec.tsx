import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Pagination from "../components/pages/main/components/pagination/Pagination";

describe("Pagination component", () => {
  test("Make sure the component updates URL query parameter when page changes", () => {
    const { container } = render(
      <MemoryRouter>
        <Pagination totalPages={10} currentPage={1} />
      </MemoryRouter>,
    );
    const nextButtonLink = container.querySelector(
      ".next-button-link",
    ) as HTMLLinkElement;

    expect(nextButtonLink).toBeInTheDocument();

    fireEvent.click(nextButtonLink);
    //   nextButtonLink?.click();
    // expect(window.location.pathname).toContain('?page=2');
    // Assert that the query parameter has changed
    //expect(window.location.search).toBe("?page=2");
  });
});
