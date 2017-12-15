import React from 'react';
import {
  string,
  func,
} from 'prop-types';

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
  const updateLiftType = (evt) => {
    const newLiftType = evt.target.value;

    updateWorkout('liftType', newLiftType);
  };

  const renderOptions = () => options.map(({ displayName, liftType }) => (
    <option key={liftType} value={liftType}>
      {displayName}
    </option>
  ));

  return (
    <select value={currentLiftType} onChange={updateLiftType}>
      {renderOptions()}
    </select>
  );
}

LiftType.propTypes = {
  currentLiftType: string.isRequired,
  updateWorkout: func.isRequired,
};

export default LiftType;
