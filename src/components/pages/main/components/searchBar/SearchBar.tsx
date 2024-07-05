import React from "react";
import "./SearchBar.css";

interface State {}

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  getBooks: () => void;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.getBooks();
  };

  render() {
    return (
      <form onSubmit={this.handleSearch} className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Enter book title..."
          value={this.props.searchTerm}
          onChange={(e) => this.props.setSearchTerm(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
