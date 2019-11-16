import React from 'react';
import { connect } from 'react-redux';

import ResultsZone from 'src/components/ResultsZone';
import TransitionCard from 'src/components/TransitionCard';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { dice, currentTurn, rollStatus } = state.game;
  return { dice, currentTurn, rollStatus };
};

// Presentational Component
const GameArea = ({ currentTurn, rollStatus, dice }) => {

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
        !rollStatus && <TransitionCard />
      }
      {/* Dice and numbers (after the dice are rolled) */}
      {
        rollStatus && <div className="dice-container">
          <div className="die">
            <img id="first-die" className="die-img" alt={`face ${firstDie} du dé`} src={`src/components/GameArea/assets/images/dark${firstDie}.png`} />
            <p>{firstDie}</p>
          </div>
          <div className="die">
            <img id="second-die" className="die-img" alt={`face ${secondDie} du dé`} src={`src/components/GameArea/assets/images/dark${secondDie}.png`} />
            <p>{secondDie}</p>
          </div>
          <div className="die">
            <img id="third-die" className="die-img" alt={`face ${thirdDie} du dé`} src={`src/components/GameArea/assets/images/dark${thirdDie}.png`} />
            <p>{thirdDie}</p>
          </div>
        </div>
      }
    </div>

    {/* Results Zone (after the dice are rolled) */}
    {
      rollStatus && <ResultsZone />
    }
  </div>;
};


const GameAreaContainer = connect(
  mapStateToProps,
  null
)(GameArea);

export default GameAreaContainer;
