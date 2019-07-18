import React from 'react';
import { UncontrolledAlert } from 'reactstrap';

const ErrorMessage = ({ error, message }) => {
  return (
    <UncontrolledAlert color="danger">
      <h4 className="alert-heading">{error}</h4>
      <hr />
      <p className="mb-0">{message}</p>
    </UncontrolledAlert>
  );
};

export default ErrorMessage;
