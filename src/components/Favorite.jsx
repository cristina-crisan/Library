import React, { Component } from "react";
import HttpServices from "../services/http-service";
import BooksTable from "./book-table/BooksTable";

class Favorite extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
   const books =  await HttpServices.getFavoriteBooks();
    this.setState({ books: books });
  }

  render() {
    return (
    <div className="vertical-align">
    <BooksTable books={this.state.books}  />
    </div>
    )
  }
}

export default Favorite;
