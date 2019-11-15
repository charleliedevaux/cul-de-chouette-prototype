import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { resetScores } from 'src/store/scores/actions';
import './styles.sass';


// Strategy to write in global state
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleClick: (event) => {
      dispatch(resetScores());
      props.history.push('/game');
    }
  };
};

// Presentational Component
const NewGame = ({ handleClick }) => {
  return <div className="new-game">
    <h2 className="new-game-title">S'que vous voulez qu'on se fasse un petit cul de chouette ?</h2>
    <p className="new-game-quote">"Allez, ça nous détendra !"</p>
    <button type="button" className="start-button" onClick={handleClick}>C'est parti !</button>
  </div>;
};


const NewGameContainer = withRouter(connect(
  null,
  mapDispatchToProps
)(NewGame));

export default NewGameContainer;
