import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

const App = () => {
  console.log('load and check auth');
  return (
    <MuiThemeProvider>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
