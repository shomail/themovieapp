import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddlewear, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import Toggle from './Toggle';

import logo from './logo.svg';
import './App.css';

const middleware = [
  logger,
];

// middleware needs to be added to the store
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddlewear(...middleware)),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
