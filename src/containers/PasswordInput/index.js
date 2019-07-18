import React, { useState } from 'react';
import { Field } from 'formik';

const PasswordInput = ({
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  errors,
  touched,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={`password-input-container ${
          errors[name] && touched[name] ? 'is-invalid' : 'valid'
        }`}
      >
        <Field
          type={show ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...otherProps}
          className="form-control"
        />
        <i
          className="material-icons"
          onClick={() => setShow(!show)}
          title={`${show ? 'Hide' : 'Show'} Password`}
        >
          {show ? 'visibility_off' : 'visibility'}
        </i>
      </div>
      <span className="form-error">{errors[name] && touched[name] && errors[name]}</span>
    </>
  );
};

export default PasswordInput;
