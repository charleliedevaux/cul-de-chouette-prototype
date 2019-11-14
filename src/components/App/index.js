/**
 * Imports de dépendances
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/**
 * Imports locaux
 */
// Composants React
import Rules from 'src/components/Rules';
import Header from 'src/components/Header';
import Scoreboard from 'src/components/Scoreboard';
import NewGame from 'src/components/NewGame';
// Données
// Styles et assets
import './styles.sass';

/**
 * Code
 */
const App = () => {
  return <div id="app">
    <Header />

    <Router>
      <Switch>
        <Route exact path="/">
          <NewGame />
        </Route>
        <Route exact path="/game">
          <Scoreboard />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>

    <Rules />
  </div>;
};

/**
 * Export
 */
export default App;
