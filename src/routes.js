import App from './App';
import HeaderLayout from './components/HeaderLayout';
import Home from './components/Home';
import UpdateWorkout from './components/UpdateWorkout';
import NewWorkout from './components/NewWorkout';
import Profile from './components/Profile';
import Auth from './components/Auth';

export default [
  {
    component: App,
    routes: [
      {
        path: '/auth',
        component: Auth,
      },
      {
        path: '/',
        component: HeaderLayout,
        routes: [
          {
            exact: true,
            path: '/user/:userId/workouts',
            component: Home,
          },
          {
            path: '/user/:userid/workouts/new',
            component: NewWorkout,
          },
          {
            path: '/user/:userId/workouts/:workoutId',
            component: UpdateWorkout,
          },
          {
            path: '/user/:userId',
            component: Profile,
          },
        ],
      },
    ],
  },
];
