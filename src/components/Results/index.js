import React from 'react';
import { connect } from 'react-redux';

import EndScreen from 'src/components/EndScreen';
import { nextPlayer } from 'src/store/game/actions';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { currentTurn, results } = state.game;
  const { winner } = state.scores;
  return { currentTurn, results, winner };
};

// Strategy to write in global state
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickOnNext: (event) => () => {
      dispatch(nextPlayer());
    }
  };
};

// Presentational Component
const Results = ({ currentTurn, results, winner, handleClickOnNext }) => {
  return <div className="results-zone">
    <h2 className="results-title">{results.combinationName}</h2>
    <p className="turn-score">+ {results.turnScore}pts</p>

    {/* Endding screen */}
    {
      winner !== '' && <EndScreen />
    }

    {/* Next Player Button */}
    {
      currentTurn === 'Joueur 1'
      && winner === ''
      && <button type="button" className="continue-button" onClick={handleClickOnNext()}>Passer les dés</button>
    }
  </div>;
};


const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default ResultsContainer;
