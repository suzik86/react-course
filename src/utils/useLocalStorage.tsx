import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : "";
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });

  useEffect(() => {
    try {
      // setup code
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
    return () => {
      // cleanup code
      window.localStorage.setItem(key, JSON.stringify(value));
    };
  }, [key, value]);

  return [value, setValue];
}
