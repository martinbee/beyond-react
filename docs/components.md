# Components

## Auth
- Google Auth and passport

## App
- Should handle checking auth?
- Send to Home if valid, if not to Auth

## HeaderLayout
- Need to redirect from '/' to Home
- Contains header and renders subroutes

## Home
- Contains workout history with pagination
- Contains new workout button

## Edit Workout
- Modifies a workout object
- Accepts save button function as a prop

## Update Workout
- Wraps edit workout
- Passes in workout from data
- Passes in put method as save function

## New Workout
- Wraps edit workout
- Passes in new workout shape
- Passes in post method as save function

## Profile
- Displays profile info
- Allows editing
- TMs, current liftype, username

## WorkoutHistory
- Gets all past workouts and displays in order
- Allows user to edit past workout

## NotFound
- Handles not found routes
