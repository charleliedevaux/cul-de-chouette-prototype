import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Rules from 'src/components/Rules';
import Header from 'src/components/Header';
import NewGame from 'src/components/NewGame';
import GameArea from 'src/components/GameArea';
import './styles.sass';


const App = () => {
  return <div id="app">
    <Header />

    <Router>
      <Switch>
        {/* To home page */}
        <Route exact path="/">
          <NewGame />
          <Rules />
        </Route>
        {/* To the game */}
        <Route exact path="/game">
          <GameArea />
        </Route>
        {/* Default redirection to home page */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>

  </div>;
};

export default App;
