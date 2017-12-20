import React from 'react';
import {
  string,
  func,
} from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const options = [
  {
    displayName: 'Overhead Press',
    liftType: 'press',
  },
  {
    displayName: 'Deadlift',
    liftType: 'deadlift',
  },
  {
    displayName: 'Bench Press',
    liftType: 'bench',
  },
  {
    displayName: 'Squats',
    liftType: 'squats',
  },
];

function LiftType({ currentLiftType, updateWorkout }) {
  const updateLiftType = (evt, index, value) => updateWorkout('liftType', value);

  const renderOptions = () => options.map(({ displayName, liftType }) => (
    <MenuItem key={liftType} value={liftType} primaryText={displayName} />
  ));

  return (
    <SelectField
      id="lift-type"
      floatingLabelText="Lift Type"
      value={currentLiftType}
      onChange={updateLiftType}
    >
      {renderOptions()}
    </SelectField>
  );
}

LiftType.propTypes = {
  currentLiftType: string.isRequired,
  updateWorkout: func.isRequired,
};

export default LiftType;
