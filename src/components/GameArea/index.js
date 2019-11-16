import React from 'react';
import { connect } from 'react-redux';

import Results from 'src/components/Results';
import TransitionCard from 'src/components/TransitionCard';
import Dice from 'src/components/Dice';
import EndScreen from 'src/components/EndScreen';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { currentTurn, rollStatus } = state.game;
  const { winner } = state.scores;
  return { currentTurn, rollStatus, winner };
};

// Presentational Component
const GameArea = ({ currentTurn, rollStatus, winner }) => {
  return <div className="game-area">

    {/* Action Zone (where the dice and roll button are displayed) */}
    { winner === '' && <div className="action-zone">
      <h2 className="action-title">{currentTurn === 'Joueur 1' ? 'C\'est votre tour' : `Tour du ${currentTurn}`}</h2>

      {/* Transition between rolls */}
      {
        !rollStatus && <TransitionCard />
      }
      {/* Dice and numbers (after the dice are rolled) */}
      {
        rollStatus && <Dice />
      }
      </div>
    }

    {/* Results Zone (after the dice are rolled) */}
    {
      rollStatus && <Results />
    }

    {/* Endding screen */}
    {
      winner !== '' && <EndScreen />
    }
  </div>;
};


const GameAreaContainer = connect(
  mapStateToProps,
  null
)(GameArea);

export default GameAreaContainer;
