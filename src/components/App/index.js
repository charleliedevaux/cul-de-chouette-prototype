import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Rules from 'src/components/Rules';
import Header from 'src/components/Header';
import Scoreboard from 'src/components/Scoreboard';
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
        </Route>
        {/* To the game */}
        <Route exact path="/game">
          <GameArea />
          <Scoreboard />
        </Route>
        {/* Default redirection to home page */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>

    <Rules />
  </div>;
};

export default App;
