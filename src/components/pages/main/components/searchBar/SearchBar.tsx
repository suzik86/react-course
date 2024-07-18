import React, { useContext } from "react";
import "./SearchBar.css";
import { ThemeContext } from "../../../../../ThemeContext";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  getBooks: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  getBooks,
}) => {
  const [error, setError] = React.useState<Error | null>(null);
  const [inputTerm, setInputTerm] = React.useState<string>(searchTerm);
  const theme = useContext(ThemeContext);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputTerm);
    getBooks();
  };

  const throwError = () => {
    console.log("Throwing error");
    setError(new Error("Simulated error."));
  };

  React.useEffect(() => {
    if (error) {
      throw new Error("Simulated error.");
    }
  }, [error]);

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        className={
          theme === "light"
            ? "search-input light-search-input"
            : "search-input dark-search-input"
        }
        type="search"
        placeholder="Enter book title..."
        value={inputTerm}
        onChange={(e) => setInputTerm(e.target.value)}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
      <button className="throw-error-btn" onClick={throwError}>
        Throw error
      </button>
    </form>
  );
};

export default SearchBar;
