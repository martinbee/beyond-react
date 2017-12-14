import React from 'react';
import {
  string,
  number,
  bool,
  arrayOf,
  shape,
  func,
} from 'prop-types';

import {
  LiftType,
  TrainingMax,
  MobilityWork,
} from './FormElements';

function EditWorkoutDisplay({
  liftType,
  trainingMax,
  mobilityWork,
  updateWorkout,
}) {
  return (
    <div>
      <h3>Workout Edit here</h3>
      <LiftType
        liftType={liftType}
        updateWorkout={updateWorkout}
      />
      <TrainingMax
        trainingMax={trainingMax}
        updateWorkout={updateWorkout}
      />
      <MobilityWork
        isChecked={mobilityWork}
        updateWorkout={updateWorkout}
      />
    </div>
  );
}

EditWorkoutDisplay.propTypes = {
  liftType: string.isRequired,
  trainingMax: number.isRequired,
  mobilityWork: bool.isRequired,
  exercises: arrayOf(shape({
    type: string.isRequired,
    subType: string,
    notes: string,
    sets: arrayOf(shape({
      reps: number,
      weight: number,
    })),
  })).isRequired,
  updateWorkout: func.isRequired,
};

export default EditWorkoutDisplay;

// eventually have a container that handles the route params, maintains the
// workout object we're updating/building, and posts changes on save
// Keep this component display only
