# TODO

- Login
- Header
- Routing
- Clean up edit workout page
- Decide between local state and redux

- REDUX
  - Flow:
    - Update and New set a currentWorkoutObject in store
    - EditWorkout send actions to modify that currentWorkoutObject

- LOCAL STATE
  - Flow:
    - Edit workout handles checking if it's new or not and manages the workout
      object in state.
