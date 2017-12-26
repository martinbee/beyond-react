import React from 'react';

import EditExercise from './EditExercise';

// need to receive exercises and then map over them with a editExercise
// component. Each exercise will have its own form element. Need a add exercise
// button which will insert a blank exercise into the workout state
// EditExercise needs to be composed of a dropdown for type, text field for
// subtype, text area for notes, EditSets much like EditWorkout that handles
// reps and weight and more can be added
function Exercises({ exercises }) {
  const renderExercises = () => exercises
    .map(exercise => <EditExercise exercise={exercise} />);

  return (
    <div>
      <p>Exercises</p>
      <button onClick={() => console.log('add')}>Add exercise</button>
      {renderExercises()}
    </div>
  );
}

export default Exercises;
