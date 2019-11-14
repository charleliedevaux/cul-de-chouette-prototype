import React from 'react';
import { connect } from 'react-redux';

import './styles.sass';


// Stratégie de lecture depuis le store/state : on extrait des informations
// depuis le state global de l'application.
const mapStateToProps = (state) => {
  const { scores } = state.scores;
  return { 
    scores
  };
};

// Composant de présentation
const Scoreboard = ({ scores }) => {
  return <div className="scoreboard">
    <h2 className="scoreboard-title">Tableau des scores</h2>

    <div className="score-container">
      <div className="score-element">
        <h3 className="score-title score-j1">Votre score :</h3>
        <p className="score">{ scores.firstPlayer } pts</p>
      </div>

      <div className="score-element">
        <h3 className="score-title score-j2">Joueur 2 :</h3>
        <p className="score">{ scores.secondPlayer } pts</p>
      </div>

      <div className="score-element">
        <h3 className="score-title score-j3">Joueur 3 :</h3>
        <p className="score">{ scores.thirdPlayer } pts</p>
      </div>

    </div>
  </div>;
};


const ScoreboardContainer = connect(
  mapStateToProps,
  null
)(Scoreboard);

export default ScoreboardContainer;
