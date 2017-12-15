import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import EditWorkout from './components/EditWorkout';


const App = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <EditWorkout />
    </div>
  </MuiThemeProvider>
);

export default App;
