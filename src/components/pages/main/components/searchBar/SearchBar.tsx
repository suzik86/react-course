import React from "react";
import "./SearchBar.css";

interface State {
  error: Error | null;
}

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  getBooks: () => void;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.getBooks();
  };

  throwError = () => {
    console.log("Throwing error");
    this.setState({ error: new Error("Simulated error.") });
  };

  componentDidUpdate(_: Readonly<Props>, prevState: Readonly<State>): void {
    if (prevState.error !== this.state.error) {
      throw new Error("Simulated error.");
    }
  }

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
        <button className="throw-error-btn" onClick={() => this.throwError()}>
          Throw error
        </button>
      </form>
    );
  }
}

export default SearchBar;
