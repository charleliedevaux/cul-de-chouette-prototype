import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { resetScores } from 'src/store/scores/actions';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { rollStatus } = state.game;
  return { rollStatus };
};

// Strategy to write in global state
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleClick: (rollStatus) => () => {
      if (!rollStatus) {
        dispatch(resetScores());
      }
      props.history.push('/game');
    }
  };
};

// Presentational Component
const NewGame = ({ handleClick, rollStatus }) => {
  return <div className="new-game">
    <h2 className="new-game-title">S'que vous voulez qu'on se fasse un petit cul de chouette ?</h2>
    <p className="new-game-quote">"Allez, ça nous détendra !"</p>
    <button type="button" className="start-button" onClick={handleClick(rollStatus)}>C'est parti !</button>
  </div>;
};


const NewGameContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGame));

export default NewGameContainer;
