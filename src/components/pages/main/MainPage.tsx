import React from 'react';
import './MainPage.css';
import BooksList from './components/booksList/BooksList';
import { BookInterface } from '../../../interfaces';
import { apiService } from '../../../services/ApiService';

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
            searchTerm: "",
            bookList: []
        };
      
    }  
    
    async componentDidMount() {
        try {          
          const list = await apiService.getBooks(this.state.searchTerm);
          this.setState({
            bookList: list,
            fetchStatus: "done"
          });
        } catch {
          this.setState({ fetchStatus: "error" });
        }
      }    

    render() {     
      
        return (  
            <div>
                <div>                    
                    <input type="search" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <BooksList list={this.state.bookList} fetchStatus={this.state.fetchStatus}/>
                <button>Throw error</button>
            </div>
        );  
  }
}

export default MainPage;