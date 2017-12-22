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
  updatedAt,
}) {
  const renderUpdatedAt = () => {
    const updatedAtDate = updatedAt.toLocaleDateString();
    const updatedAtTime = updatedAt.toLocaleTimeString();

    return <p>Last updated {updatedAtDate} at {updatedAtTime}</p>;
  };

  return (
    <div className="container">
      <h3>Edit Workout</h3>
      { updatedAt && renderUpdatedAt() }
      <div>
        <LiftType
          currentLiftType={liftType}
          updateWorkout={updateWorkout}
        />
      </div>
      <div>
        <TrainingMax
          trainingMax={trainingMax}
          updateWorkout={updateWorkout}
        />
      </div>
      <div>
        <MobilityWork
          isChecked={mobilityWork}
          updateWorkout={updateWorkout}
        />
      </div>
    </div>
  );
}

EditWorkoutDisplay.propTypes = {
  updatedAt: shape({}).isRequired,
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
