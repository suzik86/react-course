import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const searchParams = useSearchParams();
  const [value, setValue] = useState(() => {
    const searchParam = searchParams.get(key);
    if (searchParam) {
      return searchParam;
    }
    // Initialize the state
    try {
      return window?.localStorage?.getItem(key) || "";
    } catch (error) {
      return "";
    }
  });

  useEffect(() => {
    try {
      // setup code
      const currentParams = new URLSearchParams(
        Array.from(searchParams.entries()),
      );
      currentParams.set(key, value);
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
    return () => {
      // cleanup code
      const currentParams = new URLSearchParams(
        Array.from(searchParams.entries()),
      );
      currentParams.set(key, value);
      window.localStorage.setItem(key, value);
    };
  }, [key, value, searchParams]);

  return [value, setValue];
}
