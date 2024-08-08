import React, { useEffect } from "react";

export default function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  callbackFunction: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackFunction();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callbackFunction]);
}
