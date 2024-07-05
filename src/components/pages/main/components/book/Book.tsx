import React from "react";
import { BookInterface } from "../../../../../interfaces";
import "./Book.css";

interface State {    
}

interface Props {  
    book: BookInterface;
}

class Book extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      
    };
  }

  
  render() {
    return (
      <div className="book-card">
        <div className="book-title">{this.props.book.title}</div>
        <div>
          <p>Published year: {this.props.book.publishedYear}</p>
          <p>Number of pages: {this.props.book.numberOfPages}</p>
        </div>        
      </div>
    );
  }

}
export default Book;