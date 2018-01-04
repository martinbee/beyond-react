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
  Exercises,
} from './FormElements';

function EditWorkoutDisplay({
  liftType,
  trainingMax,
  mobilityWork,
  exercises,
  updateWorkout,
  updatedAt,
}) {
  const renderUpdatedAt = () => {
    const updatedAtDate = updatedAt.toLocaleDateString();
    const updatedAtTime = updatedAt.toLocaleTimeString();

    return <p>Last updated {updatedAtDate} at {updatedAtTime}</p>;
  };

  const formElements = [
    {
      component: LiftType,
      key: 'LiftType',
      props: {
        currentLiftType: liftType,
      },
    },
    {
      component: TrainingMax,
      key: 'TrainingMax',
      props: {
        trainingMax,
      },
    },
    {
      component: MobilityWork,
      key: 'MobilityWork',
      props: {
        isChecked: mobilityWork,
      },
    },
    {
      component: Exercises,
      key: 'Exercises',
      props: {
        exercises,
      },
    },
  ];

  const renderWorkouts = () => formElements
    .map(({ key, component, props }) => (
      <div key={key}>
        {component({ updateWorkout, ...props })}
      </div>
    ));

  return (
    <div className="container">
      <h3>Edit Workout</h3>
      { updatedAt && renderUpdatedAt() }
      { renderWorkouts() }
    </div>
  );
}

EditWorkoutDisplay.propTypes = {
  updatedAt: shape({}).isRequired,
  liftType: string.isRequired,
  trainingMax: number.isRequired,
  mobilityWork: bool.isRequired,
  exercises: arrayOf(shape({
    type: string,
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
