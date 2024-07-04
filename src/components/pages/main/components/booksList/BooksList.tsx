import React from 'react';
import './BooksList.css';
import { BookInterface } from '../../../../../interfaces';

interface State {  
}

interface Props {
  list: BookInterface[];
  fetchStatus: "loading" | "error" | "done";
}

class BooksList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
      
        this.state = {
          // Sets that initial state
        };      
        
    }   

    render() {
        if (this.props.fetchStatus === "loading") {
          return <div>Loading...</div>;
        }
        if (this.props.fetchStatus === "error") {
          return <div>ERR!</div>;
        }  
      
        return (
            <ul>
                {this.props.list.map((book, i) => (
                <li key={i}>{book.title}</li>
                ))}
          </ul>         
        );
  }
}

export default BooksList;