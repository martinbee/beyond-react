import React from 'react';

import EditExercise from './EditExercise';

// need to receive exercises and then map over them with a editExercise
// component. Each exercise will have its own form element. Need a add exercise
// button which will insert a blank exercise into the workout state
// EditExercise needs to be composed of a dropdown for type, text field for
// subtype, text area for notes, EditSets much like EditWorkout that handles
// reps and weight and more can be added
function Exercises({ exercises, updateWorkout }) {
  const removeExercise = (indexToRemove) => {
    const updatedExercises = exercises.filter((exercise, index) => index !== indexToRemove);

    updateWorkout('exercises', updatedExercises);
  };

  const updateExercise = (indexToUpdate, updates) => {
    const updatedExercises = exercises.map((exercise, index) => {
      if (index === indexToUpdate) return { ...exercise, ...updates };

      return exercise;
    });

    updateWorkout('exercises', updatedExercises);
  };

  const renderExercises = () => exercises
    .map((exercise, index) => {
      const exerciseProps = {
        key: index,
        exercise,
        removeExercise: () => removeExercise(index),
        updateExercise: updates => updateExercise(index, updates),
      };

      return <EditExercise {...exerciseProps} />;
    });

  const addExercise = () => updateWorkout('exercises', [...exercises, {}]);

  return (
    <div>
      <p>Exercises</p>
      <button onClick={addExercise}>Add exercise</button>
      {renderExercises()}
    </div>
  );
}

export default Exercises;

