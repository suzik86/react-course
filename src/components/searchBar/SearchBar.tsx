"use client";
import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import styles from "./SearchBar.module.css";

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const SearchBar: FC<Props> = ({ searchTerm, setSearchTerm }) => {
  const [error, setError] = useState<Error | null>(null);
  const [inputTerm, setInputTerm] = useState<string>(searchTerm);
  const theme = useContext(ThemeContext);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputTerm);
    router.push(`/?searchTerm=${inputTerm}&page=0`);
  };

  const throwError = () => {
    setError(new Error("Simulated error."));
  };

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return (
    <form onSubmit={handleSearch} className={styles.search_bar}>
      <input
        className={
          theme === "light"
            ? styles.light_search_input
            : styles.dark_search_input
        }
        type="search"
        placeholder="Enter book title..."
        value={inputTerm}
        onChange={(e) => setInputTerm(e.target.value)}
      />
      <button className={styles.search_btn} type="submit">
        Search
      </button>
      <button className={styles.throw_error_btn} onClick={throwError}>
        Throw error
      </button>
    </form>
  );
};

export default SearchBar;
