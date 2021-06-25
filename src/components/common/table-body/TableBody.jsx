import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { data, columns, onRowClick } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={()=>onRowClick(item)}>
            {columns.map((column) => (
              <td key={column.label}>{item[column.path]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
