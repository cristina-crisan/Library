import React, { Component } from "react";
import { withRouter } from "react-router";
import HttpServices from "../../services/http-service";
import "./book-details.scss"

class BookDetails extends Component {
  bookId = this.props.match.params.id;
  state = {
    book: {},
  };

  async componentDidMount() {
    const book = await HttpServices.getBook(this.bookId);
    this.setState({ book });
  }

  handleEdit = () => {
    this.props.history.push(`/edit-book/${this.bookId}`);
  };

  handleDelete = async (bookId) => {
    this.props.history.push("/");
    await HttpServices.deleteBook(bookId);
  };

  handleFavorite = (book) => {
    fetch("http://localhost:8000/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
  };

  render() {
    const { book } = this.state;
    return (
      <div className="details vertical-align">
         <div className="book-image">
          <img src={book.imageUrl} alt="book" />
        </div>
        <div className="book-info">
          <div className="book-description">
            <h2>{book.title} </h2>
            <p> by {book.author}</p>
            <p>{book.description}</p>
            <p> Genre: {book.genre}</p>
            <p> Price: {book.price} lei</p>
          </div>
          <div className="action-buttons">
            <button>
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button onClick={this.handleEdit}>
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => this.handleDelete(book.id)}>
              <i className="far fa-trash-alt"></i>
            </button>
            <button onClick={() => this.handleFavorite(book)}>
              <i className="fas fa-heart"></i>
            </button>
          </div>
        </div>
       
      </div>
    );
  }
}

export default withRouter(BookDetails);
