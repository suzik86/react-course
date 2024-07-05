import React from "react";
import "./BooksList.css";
import { BookInterface } from "../../../../../interfaces";
import Book from "../book/Book";

interface State {}

interface Props {
  list: BookInterface[];
  fetchStatus: "loading" | "error" | "done";
}

class BooksList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.fetchStatus === "loading") {
      return <div className="loader"></div>;
    }
    if (this.props.fetchStatus === "error") {
      return <div>ERR!</div>;
    }

    return (
      <div>
        {this.props.list.length === 0 && (
          <p className="not-found">No matching books</p>
        )}
        {this.props.list.length > 0 &&
          this.props.list.map((book, i) => <Book book={book} key={i} />)}
      </div>
    );
  }
}

export default BooksList;
