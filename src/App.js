import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
  <MuiThemeProvider>
    {renderRoutes(route.routes)}
  </MuiThemeProvider>
);

export default App;
