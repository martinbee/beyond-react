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
    path: '/users',
    component: HeaderLayout,
    routes: [
      {
        path: '/users/:userId/workouts',
        component: Home,
        exact: true,
      },
      {
        path: '/users/:userid/workouts/new',
        component: NewWorkout,
        exact: true,
      },
      {
        path: '/users/:userId/workouts/:workoutId',
        component: UpdateWorkout,
        exact: true,
      },
      {
        path: '/users/:userId',
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
