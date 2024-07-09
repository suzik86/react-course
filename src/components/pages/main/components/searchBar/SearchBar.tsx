import React from "react";
import "./SearchBar.css";

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  getBooks: () => void;
}

const SearchBar: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  getBooks,
}) => {
  const [error, setError] = React.useState<Error | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        className="search-input"
        type="search"
        placeholder="Enter book title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
