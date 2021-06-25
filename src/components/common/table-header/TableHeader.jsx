import React, { Component } from "react";
import "./table-header.scss"
class TableHeader extends Component {
 
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <td key={column.label}>{column.label}</td>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
