# TODO

- Login
- Header
- Fix Routing
- Clean up edit workout page
- Decide between local state and redux
- Think about adding a snackbar for errors
- Think about how to handle 500 errors
- How to handle null data fetch

- REDUX
  - Flow:
    - Update and New set a currentWorkoutObject in store
    - EditWorkout send actions to modify that currentWorkoutObject

- LOCAL STATE
  - Flow:
    - Edit workout handles checking if it's new or not and manages the workout
      object in state.

- think about numbers and strings, do I store strings or convert to numbers on
  inputs?? I have NaN right now and that sucks.

