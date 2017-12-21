import Auth from './components/Auth';
import HeaderLayout from './components/HeaderLayout';
import Home from './components/Home';
import NewWorkout from './components/NewWorkout';
import UpdateWorkout from './components/UpdateWorkout';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

export default [
  {
    path: '/auth',
    component: Auth,
    exact: true,
  },
  {
    path: '/user',
    component: HeaderLayout,
    routes: [
      {
        path: '/user/:userId/workouts',
        component: Home,
        exact: true,
      },
      {
        path: '/user/:userid/workouts/new',
        component: NewWorkout,
        exact: true,
      },
      {
        path: '/user/:userId/workouts/:workoutId',
        component: UpdateWorkout,
        exact: true,
      },
      {
        path: '/user/:userId',
        component: Profile,
        exact: true,
      },
    ],
  },
  {
    component: NotFound,
    name: 'Not Found',
  },
];
