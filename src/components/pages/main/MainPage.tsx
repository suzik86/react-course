import React from "react";
import "./MainPage.css";
import BooksList from "./components/booksList/BooksList";
import { BookInterface } from "../../../interfaces";
import { apiService } from "../../../services/ApiService";
import SearchBar from "./components/searchBar/SearchBar";

interface State {  
  searchTerm: string;
  bookList: BookInterface[];
  fetchStatus: "loading" | "error" | "done";
  error: Error | null;
}

interface Props {}

class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {      
      searchTerm: localStorage.getItem("searchTerm") || "",
      bookList: [],
      fetchStatus: "loading",
      error: null,      
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

  throwError = () => {
    try {
      throw new Error("Simulated error.");
    } catch (error) {
      this.setState({ error: error as Error });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>
    }
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
        <button className="throw-error-btn" onClick={() => this.throwError()}>Throw error</button>
      </main>
    );
  }
}

export default MainPage;
