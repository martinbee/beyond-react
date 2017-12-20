import React from 'react';
import {
  number,
  func,
} from 'prop-types';
import TextField from 'material-ui/TextField';

 <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    />
function TrainingMax({ trainingMax, updateWorkout }) {
  const updateTrainingMax = (event) => {
    const inputValue = event.target.value;
    const updatedTrainingMax = parseInt(inputValue, 10);

    updateWorkout('trainingMax', updatedTrainingMax);
  };

  return (
    <TextField
      id="training-max"
      value={trainingMax || ''}
      onChange={updateTrainingMax}
      floatingLabelText="Training Max"
    />
  );
}

TrainingMax.propTypes = {
  trainingMax: number.isRequired,
  updateWorkout: func.isRequired,
};

export default TrainingMax;
