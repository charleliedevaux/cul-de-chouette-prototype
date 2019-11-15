import React from 'react';
import { connect } from 'react-redux';

import { rollDice } from 'src/store/game/actions';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { dice, currentTurn, rollStatus, results } = state.game;
  return { dice, currentTurn, rollStatus, results };
};

// Strategy to write in global state
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (event) => {
      dispatch(rollDice());
    }
  };
};

// Presentational Component
const GameArea = ({ currentTurn, rollStatus, dice, handleClick, results }) => {

  const firstDie = dice.firstDie;
  const secondDie = dice.secondDie;
  const thirdDie = dice.thirdDie;

  // Function to create the action-zone title depending on the turn
  const actionTitle = (player) => {
    switch (player) {
      case 'firstPlayer': {
        return 'C\'est votre tour !';
      }
      case 'secondPlayer': {
        return 'Tour du joueur 2';
      }
      case 'thirdPlayer': {
        return 'Tour du joueur 3';
      }
      default: {
        return '';
      }
    }
  };

  return <div className="game-area">

    {/* Action Zone (where the dice and roll button are displayed) */}
    <div className="action-zone">
      <h2 className="action-title">{actionTitle(currentTurn)}</h2>

      {/* Image and roll button (before the dice are rolled) */}
      {
      !rollStatus && <div>
        <img className="action-img" alt="Gobelet avec dés" src="src/components/GameArea/assets/images/roll.png" />
        <button type="button" className="roll-button" onClick={handleClick}>&Agrave; vous d'faire</button>
      </div>
      }
      {/* Dice and numbers (after the dice are rolled) */}
      {
        rollStatus && <div className="dice-container">
          <div className="die">
            <img className="die-img" alt={`face ${firstDie} du dé`} src={`src/components/GameArea/assets/images/dark${firstDie}.png`} />
            <p>{firstDie}</p>
          </div>
          <div className="die">
            <img className="die-img" alt={`face ${secondDie} du dé`} src={`src/components/GameArea/assets/images/dark${secondDie}.png`} />
            <p>{secondDie}</p>
          </div>
          <div className="die">
            <img className="die-img" alt={`face ${thirdDie} du dé`} src={`src/components/GameArea/assets/images/dark${thirdDie}.png`} />
            <p>{thirdDie}</p>
          </div>
        </div>
      }
    </div>

    {/* Results Zone (after the dice are rolled) */}
    {rollStatus && <div className="results-zone">
      <h2 className="results-title">{results.combinationName}</h2>
      <p className="turn-score">+ {results.turnScore}pts</p>
      <button type="button" className="continue-button">Passer les dés</button>
    </div>}
  </div>;
};


const GameAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameArea);

export default GameAreaContainer;
