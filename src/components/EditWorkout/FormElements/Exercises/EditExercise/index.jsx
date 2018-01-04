import React from 'react';
import {
  Type,
} from './FormElements';

// EditExercise needs to be composed of a dropdown for type, text field for
// subtype, text area for notes, EditSets much like EditWorkout that handles
// reps and weight and more can be added
function EditExercise({ exercise, updateExercise, removeExercise }) {
  const { type, subType, sets, notes } = exercise;

  // handle exercises like workouts
  return (
    <div>
      <button onClick={removeExercise}>X</button>
      <Type currentType={type} updateExercise={updateExercise} />
    </div>
  );
}

export default EditExercise;
