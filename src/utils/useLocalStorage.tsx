import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(key) || "",
  );

  useEffect(() => {
    try {
      // setup code
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
    }
    return () => {
      // cleanup code
      window.localStorage.setItem(key, value);
    };
  }, [key, value]);

  return [value, setValue];
}
