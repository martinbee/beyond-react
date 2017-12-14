import React from 'react';
import {
  oneOfType,
  string,
  number,
  element,
  func,
} from 'prop-types';

const Checkbox = ({
  htmlFor,
  label,
  ...rest
}) => (
  <label htmlFor={htmlFor}>
    <input type="checkbox" {...rest} />
    {label}
  </label>
);

Checkbox.propTypes = {
  id: string.isRequired,
  htmlFor: string.isRequired,
  label: oneOfType([
    string,
    number,
    element,
  ]).isRequired,
  onChange: func.isRequired,
};

export default Checkbox;
