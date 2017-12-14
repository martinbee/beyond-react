import React from 'react';
import {
  string,
  func,
} from 'prop-types';

const TrainingMax = ({ value, onChange }) => (
  <label htmlFor="training-max">
    <input
      id="training-max"
      type="text"
      value={value}
      onChange={onChange}
    />
    TrainingMax
  </label>
);

TrainingMax.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

export default TrainingMax;
