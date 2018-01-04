import React from 'react';

// EditExercise needs to be composed of a dropdown for type, text field for
// subtype, text area for notes, EditSets much like EditWorkout that handles
// reps and weight and more can be added
function EditExercise({ exercise, updateExercise, removeExercise }) {
  const { _id, type, subType, sets, notes } = exercise;

  return (
    <div>
      <button onClick={removeExercise}>X</button>
      {type}
    </div>
  );
}

export default EditExercise;
