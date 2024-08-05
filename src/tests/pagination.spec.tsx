import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Pagination from "../components/pagination/Pagination";

describe("Pagination component", () => {
  test("Make sure the pagination buttons exist", async () => {
    const { container } = render(
      <Pagination totalPages={10} currentPage={1} searchTerm="" />,
    );
    const nextButton = container.querySelector(".next_button") as HTMLElement;
    expect(nextButton).toBeInTheDocument();
    const prevButton = container.querySelector(
      ".previous_button",
    ) as HTMLElement;
    expect(prevButton).toBeInTheDocument();
  });

  test("Make sure the previous pagination button is disabled when on the first page and next button is enabled ", async () => {
    const { container } = render(
      <Pagination totalPages={10} currentPage={0} searchTerm="" />,
    );
    const prevButton = container.querySelector(
      ".previous_button",
    ) as HTMLElement;
    expect(prevButton).toBeDisabled();
    const nextButton = container.querySelector(".next_button") as HTMLElement;
    expect(nextButton).not.toBeDisabled();
  });
});
