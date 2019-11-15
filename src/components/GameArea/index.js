import React from 'react';
import { connect } from 'react-redux';

import { rollDice } from 'src/store/game/actions';
import './styles.sass';


// Stratégie de lecture depuis le store/state : on extrait des informations
// depuis le state global de l'application.
const mapStateToProps = (state) => {
  const { dice, currentTurn, rollStatus } = state.game;
  console.log(state);
  return { dice, currentTurn, rollStatus };
};

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
  return <div className="game-area">
    <div className="action-zone">
      <h2 className="action-title">{actionTitle(currentTurn)}</h2>

      {
      !rollStatus && <div><img className="action-img" alt="Cup with rolling dice" src="src/components/GameArea/assets/images/roll.png" />
        <button type="button" className="roll-button" onClick={handleClick}>&Agrave; vous d'faire</button>
      </div>
      }
      {
        rollStatus && <div>
          { dice.firstDie }
          { dice.secondDie }
          { dice.thirdDie }
        </div>
      }

    </div>
    <div className="results-zone">
      <h2>Results</h2>
    </div>
  </div>;
};


const GameAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameArea);

export default GameAreaContainer;
