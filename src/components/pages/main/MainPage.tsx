import React from "react";
import "./MainPage.css";
import BooksList from "./components/booksList/BooksList";
import { BookInterface } from "../../../interfaces";
import { apiService } from "../../../services/ApiService";
import SearchBar from "./components/searchBar/SearchBar";

interface State {
  fetchStatus: "loading" | "error" | "done";
  searchTerm: string;
  bookList: BookInterface[];
}

interface Props {}

class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      fetchStatus: "loading",
      searchTerm: localStorage.getItem("searchTerm") || "",
      bookList: [],
    };
  }

  async componentDidMount() {
    await this.getBooks();
  }

  async getBooks() {
    try {
      const list = await apiService.getBooks(this.state.searchTerm.trim());
      this.setState({
        bookList: list,
        fetchStatus: "done",
      });
    } catch {
      this.setState({ fetchStatus: "error" });
    }
  }

  setSearchTerm = (searchTerm: string) => {
    localStorage.setItem("searchTerm", searchTerm);
    this.setState({ searchTerm });
  };

  render() {
    return (
      <main className="main">
        <h1>Book Library</h1>
        <SearchBar
          searchTerm={this.state.searchTerm}
          setSearchTerm={this.setSearchTerm}
          getBooks={() => this.getBooks()}
        />
        <BooksList
          list={this.state.bookList}
          fetchStatus={this.state.fetchStatus}
        />
        <button>Throw error</button>
      </main>
    );
  }
}

export default MainPage;
