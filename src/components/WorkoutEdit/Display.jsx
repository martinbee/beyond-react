import React from 'react';

import {
  LiftType,
  TrainingMax,
  MobilityWork,
} from './FormElements';

const WorkoutEdit = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h3>Workout Edit here</h3>
      <LiftType />
      <TrainingMax />
      <MobilityWork />
    </div>
  );
};

export default WorkoutEdit;

// eventually have a container that handles the route params, maintains the
// workout object we're updating/building, and posts changes on save
// Keep this component display only
