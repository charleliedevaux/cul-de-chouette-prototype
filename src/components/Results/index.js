import React from 'react';
import { connect } from 'react-redux';

import { nextPlayer } from 'src/store/game/actions';
import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { currentTurn, results } = state.game;
  return { currentTurn, results };
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
const Results = ({ currentTurn, results, handleClickOnNext }) => {
  console.log('Results Zone : ', currentTurn);

  return <div className="results-zone">
    <h2 className="results-title">{results.combinationName}</h2>
    <p className="turn-score">+ {results.turnScore}pts</p>
    {
      currentTurn === 'Joueur 1' && <button type="button" className="continue-button" onClick={handleClickOnNext()}>Passer les dés</button>
    }
  </div>;
};


const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default ResultsContainer;
