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
          {/* Composant initial */}
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
