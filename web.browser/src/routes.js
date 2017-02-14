import React from 'react';
import { BrowserRouter as Router } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App';



import muiTheme from './styles/mui-theme';
import './styles/index.css';

const routes = (
    <Router>
       <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </Router>
);

export default routes;
