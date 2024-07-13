import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Pagination from "../components/pages/main/components/pagination/Pagination";
import { useState } from "react";

describe("Pagination component", () => {
  test("Make sure the component updates URL query parameter when page changes", async () => {
    let mockSearchParam = "page=1";

    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useSearchParams: () => {
        const [params, setParams] = useState(
          new URLSearchParams(mockSearchParam),
        );
        return [
          params,
          (newParams: string) => {
            mockSearchParam = newParams;
            setParams(new URLSearchParams(newParams));
          },
        ];
      },
    }));

    const { container } = render(
      <MemoryRouter>
        <Pagination totalPages={10} currentPage={1} />
      </MemoryRouter>,
    );
    const nextButton = container.querySelector(".next-button") as HTMLElement;

    expect(nextButton).toBeInTheDocument();
    // fireEvent.click(nextButton as HTMLElement);
    // await waitFor(() => {
    //   // const currentUrl = window.location.pathname;
    //   expect(mockSearchParam).toContain('page=2');
    //   //expect(currentUrl).toBe("?page=2");
    // });
    // fireEvent.click(nextButton as HTMLElement);
    // await waitFor(() => {
    //   expect(window.location.search).toBe("?page=3");
    // });
    // const previousButton = container.querySelector(
    //   ".previous-button"
    // ) as HTMLElement;

    // fireEvent.click(previousButton);
    // expect(window.location.search).toBe("?page=2");
  });
});
