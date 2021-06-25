import React, { Component } from "react";
import HttpServices from "../../services/http-service";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import "./book-form.scss";

class BookForm extends Component {
  bookId = this.props.match.params.id;
  state = {
    book: {
      id: "",
      title: "",
      author: "",
      description: "",
      imageUrl: "",
      genre: "",
      price: "",
      liked: "false",
    },
  };

  initialState = { ...this.state };

  async componentDidMount() {
    if (this.bookId) {
      const book = await HttpServices.getBook(this.bookId);
      this.setState({ book });
    }
  }

  handleSubmit = async (book) => {
    if (book.id) {
      const body = { ...book };
      delete body.id;
      await HttpServices.editBook(this.bookId, body);
    } else {
      await HttpServices.addNewBook(book);
      this.setState(this.initialState);
    }
    this.props.history.push("/");
  };

  handleChange = ({ currentTarget: input }) => {
    const book = { ...this.state.book };
    book[input.name] = input.value;
    this.setState({ book });
  };

  render() {
    return (
      <form className="vertical-align">
       
          <Input
            type="text"
            name="title"
            value={this.state.book.title}
            id="name"
            onChange={this.handleChange}
            label="Title"
          />
          <Textarea
            name="description"
            value={this.state.book.description}
            id="description"
            rows="5"
            cols="33"
            onChange={this.handleChange}
            label="Description"
          />
          <Input
            type="text"
            name="genre"
            id="genre"
            value={this.state.book.genre}
            onChange={this.handleChange}
            label="Genre"
          />
          <Input
            name="author"
            id="author"
            type="text"
            value={this.state.book.author}
            onChange={this.handleChange}
            label="Author"
          />

          <Input
            name="imageUrl"
            id="imageUrl"
            type="text"
            value={this.state.book.imageUrl}
            onChange={this.handleChange}
            label="Book poster"
          />

          <Input
            name="price"
            id="price"
            type="text"
            value={this.state.book.price}
            onChange={this.handleChange}
            label="Price"
          />
    
        <button
          type="button"
          onClick={() => this.handleSubmit(this.state.book)}
        >
          Save
        </button>
      </form>
    );
  }
}

export default BookForm;
