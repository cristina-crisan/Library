class HttpServices {
  static getBooks() {
    return fetch("http://localhost:8000/books").then((responese) =>
      responese.json()
    );
  }

  static getBook(bookId) {
    return fetch(`http://localhost:8000/books/${bookId}`).then((responese) =>
      responese.json()
    );
  }

  static editBook(bookId, body) {
    return fetch(`http://localhost:8000/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  static addNewBook(book) {
    return fetch("http://localhost:8000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
  }

  static deleteBook(bookId) {
    return fetch(`http://localhost:8000/books/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static getFavoriteBooks() {
    return fetch("http://localhost:8000/favorites").then((responese) =>
      responese.json()
    );
  }
}
export default HttpServices;
