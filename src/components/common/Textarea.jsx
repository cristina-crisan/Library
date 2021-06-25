import React, { Fragment } from "react";

const Textarea = ({ label, name, value, rows, cols, onChange }) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
      ></textarea>
    </Fragment>
  );
};

export default Textarea;
