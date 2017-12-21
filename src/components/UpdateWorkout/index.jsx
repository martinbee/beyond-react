import React from 'react';
import EditWorkout from '../EditWorkout';
import {
  getWorkoutShowUrl,
} from '../utilities/urlConstructor';

function UpdateWorkout({ match }) {
  const {
    userId,
    workoutId,
  } = match.params;

  const workoutShow = getWorkoutShowUrl(userId, workoutId);

  return <EditWorkout isUpdate dataUrl={workoutShow} />;
}

export default UpdateWorkout;
