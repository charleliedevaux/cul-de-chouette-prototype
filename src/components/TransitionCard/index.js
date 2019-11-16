import React from 'react';
import { connect } from 'react-redux';

import { rollDice } from 'src/store/game/actions';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { currentTurn } = state.game;
  return { currentTurn };
};

// Strategy to write in global state
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickOnRoll: (event) => {
      dispatch(rollDice());
    }
  };
};

// Presentational Component
const TransitionCard = ({ currentTurn, handleClickOnRoll }) => {

  return <div>
    <img className="action-img" alt="Gobelet avec dés" src="src/components/TransitionCard/assets/images/roll.png" />
    <button type="button" className="roll-button" onClick={handleClickOnRoll}>&Agrave; vous d'faire</button>

    <p>{currentTurn} lance les dés</p>
  </div>;
};


const TransitionCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransitionCard);

export default TransitionCardContainer;
