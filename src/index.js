import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import registerServiceWorker from './registerServiceWorker';
import './fonts/fonts.css';
import './index.css';
import routes from './routes';

const Root = () => (
  <Router>
    {renderRoutes(routes)}
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
