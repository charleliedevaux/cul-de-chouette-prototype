import React from 'react';
import { connect } from 'react-redux';

import { rollDice } from 'src/store/game/actions';
import './styles.sass';


// Stratégie de lecture depuis le store/state : on extrait des informations
// depuis le state global de l'application.
const mapStateToProps = (state) => {
  const { dice, currentTurn, rollStatus } = state.game;
  return { dice, currentTurn, rollStatus };
};

// Stratégie d'écriture dans le state global de l'application.
// La fonction dispatchers retourne un objet, chaque propriété va devenir
// un prop passée à un composant de présentation qui pourra utiliser les
// fonctions définies pour déclencher des dispatch().
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (event) => {
      dispatch(rollDice());
    }
  };
};

// Composant de présentation
const GameArea = ({ currentTurn, rollStatus, dice, handleClick }) => {

  const firstDie = dice.firstDie;
  const secondDie = dice.secondDie;
  const thirdDie = dice.thirdDie;

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

  const checkResults = (a, b, c) => {
    let results = {};
    if (a === b && b === c) {
      results = {
        combinationName: 'Cul de Chouette !',
        scoringNumber: a
      };
    }
    if (b + c === a) {
      results = {
        combinationName: `Velute de ${a}`,
        scoringNumber: a
      };
    }
    if (a + c === b) {
      results = {
        combinationName: `Velute de ${b}`,
        scoringNumber: b
      };
    }
    if (a + b === c) {
      results = {
        combinationName: `Velute de ${c}`,
        scoringNumber: c
      };
    }
    if (a === b || a === c) {
      results = {
        combinationName: `Chouette de ${a}`,
        scoringNumber: a
      };
    }
    if (b === c) {
      results = {
        combinationName: `Chouette de ${b}`,
        scoringNumber: b
      };
    }
    return results;
  };

  return <div className="game-area">
    <div className="action-zone">
      <h2 className="action-title">{actionTitle(currentTurn)}</h2>

      {
      !rollStatus && <div><img className="action-img" alt="Gobelet avec dés" src="src/components/GameArea/assets/images/roll.png" />
        <button type="button" className="roll-button" onClick={handleClick}>&Agrave; vous d'faire</button>
      </div>
      }
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
    <div className="results-zone">
      <h2>Results</h2>
      <p>{rollStatus && checkResults(firstDie, secondDie, thirdDie).combinationName}</p>
    </div>
  </div>;
};


const GameAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameArea);

export default GameAreaContainer;
