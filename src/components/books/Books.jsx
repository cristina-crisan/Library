import React, { Component } from "react";
import BooksTable from "../book-table/BooksTable";
import HttpServices from "../../services/http-service";


class Books extends Component {
  state = {
    books: [
      {
        id: "",
        title: "",
        author: "",
        description: "",
        imageUrl: "",
        genre: "",
        price: "",
      },
    ],
  };

  async componentDidMount() {
    const books =  await HttpServices.getBooks();
    this.setState({ books })
  }

  render() {
    if (this.state.books.length === 0)
      return <p>"There are no books available at this time"</p>;

    return (
      <div className="vertical-align ">
        <p>
          This library contains {this.state.books.length} books, and is getting
          bigger every day.
        </p>
        <BooksTable books={this.state.books} />
      </div>
    );
  }
}

export default Books;
