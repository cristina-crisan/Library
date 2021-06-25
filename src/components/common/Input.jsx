import React, { Fragment } from "react";

const Input = ({ name, type, value, label, onChange }) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        id={name}
        value={value}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default Input;
