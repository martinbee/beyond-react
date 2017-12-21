const getWorkoutShowUrl = (userId, workoutId) => (
  `/users/${userId}/workouts/${workoutId}`
);

export default getWorkoutShowUrl;
