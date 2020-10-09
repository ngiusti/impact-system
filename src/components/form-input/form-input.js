import React from "react";

import classes from "./form-input.module.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={classes.Group}>
    <input className={classes.FormInput} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? classes.Shrink : ""
        } ${classes.FormInputLabel}`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
