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
  let playerID = '';
  if (currentTurn === 'Joueur 2') {
    playerID = 'second-player-tag';
  }
  if (currentTurn === 'Joueur 3') {
    playerID = 'third-player-tag';
  }

  return <div>
    <img className="action-img" alt="Gobelet avec dés" src="src/components/TransitionCard/assets/images/roll.png" />
    {
      currentTurn === 'Joueur 1' && <button type="button" className="roll-button" onClick={handleClickOnRoll}>&Agrave; vous d'faire</button>
    }
    {
      currentTurn !== 'Joueur 1' && <p className="transition-text">
        <span className="player-tag" id={playerID}>
          {currentTurn}
        </span> lance les dés
      </p>
    }
  </div>;
};


const TransitionCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransitionCard);

export default TransitionCardContainer;
