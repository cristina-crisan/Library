import React, { Component } from "react";
import TableHeader from "../common/table-header/TableHeader";
import TableBody from "../common/table-body/TableBody";
import { withRouter } from "react-router";
import "./book-table.scss";

class BooksTable extends Component {
  columns = [
    { label: "Title", path: "title" },
    { label: "Author", path: "author" },
    { label: "Genre", path: "genre" },
    { label: "Price", path: "price" }
  ];

  handeleRowClick = (item) => {
    this.props.history.push(`/books/${item.id}`);
  };

  render() {
    const { books } = this.props;
    return (
      <table>
        <TableHeader columns={this.columns} />
        <TableBody
          data={books}
          columns={this.columns}
          onRowClick={this.handeleRowClick}
        />
      </table>
    );
  }
}

export default withRouter(BooksTable);
