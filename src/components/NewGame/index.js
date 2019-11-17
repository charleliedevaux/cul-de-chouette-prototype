import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { newGame } from 'src/store/game/actions';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { gameStatus } = state.game;
  return { gameStatus };
};

// Strategy to write in global state
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleClick: (gameStatus) => () => {
      if (!gameStatus) {
        dispatch(newGame());
      }
      props.history.push('/game');
    }
  };
};

// Presentational Component
const NewGame = ({ handleClick, gameStatus }) => {
  return <div className="new-game">
    <h2 className="new-game-title">Est-c'que vous voulez qu'on se fasse un petit cul de chouette ?</h2>
    <p className="new-game-quote">"Allez, ça nous détendra !"</p>
    <button type="button" className="start-button" onClick={handleClick(gameStatus)}>C'est parti !</button>
  </div>;
};


const NewGameContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGame));

export default NewGameContainer;
