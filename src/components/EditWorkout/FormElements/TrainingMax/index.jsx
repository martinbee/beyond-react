import React from 'react';
import {
  number,
  func,
} from 'prop-types';

function TrainingMax({ trainingMax, updateWorkout }) {
  const updateTrainingMax = (event) => {
    const inputValue = event.target.value;
    const updatedTrainingMax = parseInt(inputValue, 10);

    updateWorkout('trainingMax', updatedTrainingMax);
  };

  return (
    <label htmlFor="training-max">
      <input
        id="training-max"
        type="number"
        value={trainingMax || ''}
        onChange={updateTrainingMax}
      />
      Training Max
    </label>
  );
}

TrainingMax.propTypes = {
  trainingMax: number.isRequired,
  updateWorkout: func.isRequired,
};

export default TrainingMax;
