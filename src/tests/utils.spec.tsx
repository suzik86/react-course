import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import downloadBooks from "../utils/downloadBooks";
import { BookMock } from "./mocks/BookMock";
import { act, renderHook } from "@testing-library/react";
import useOutsideAlerter from "../utils/useOutsideAlerter";
import useLocalStorage from "../utils/useLocalStorage";

describe("downloadBooks", () => {
  it("check that the link was created and then deleted", () => {
    const createElementSpy = jest.spyOn(document, "createElement");
    const appendChildSpy = jest.spyOn(document.body, "appendChild");
    const removeChildSpy = jest.spyOn(document.body, "removeChild");
    const selectedBooks = [BookMock];
    downloadBooks(selectedBooks);

    expect(createElementSpy).toHaveBeenCalledWith("a");
    expect(appendChildSpy).toHaveBeenCalled();
    expect(removeChildSpy).toHaveBeenCalled();

    createElementSpy.mockRestore();
    appendChildSpy.mockRestore();
    removeChildSpy.mockRestore();
  });
});

describe("useOutsideAlerter", () => {
  it("should call the callback function when clicking outside the ref element", () => {
    const callbackFunction = jest.fn();
    const ref = { current: document.createElement("div") };

    renderHook(() => useOutsideAlerter(ref, callbackFunction));

    const outsideElement = document.createElement("div");
    document.body.appendChild(outsideElement);

    const event = new MouseEvent("mousedown", { bubbles: true });
    outsideElement.dispatchEvent(event);

    expect(callbackFunction).toHaveBeenCalled();

    document.body.removeChild(outsideElement);
  });
});

describe("useLocalStorage", () => {
  it("should store and retrieve value from localStorage", () => {
    const key = "testKey";
    const { result } = renderHook(() => useLocalStorage(key));
    act(() => {
      (result.current[1] as React.Dispatch<React.SetStateAction<string>>)(
        "testValue",
      );
    });
    expect(window.localStorage.getItem(key)).toBe("testValue");
    act(() => {
      (result.current[1] as React.Dispatch<React.SetStateAction<string>>)("");
    });
    expect(window.localStorage.getItem(key)).toBe("");
  });
});
