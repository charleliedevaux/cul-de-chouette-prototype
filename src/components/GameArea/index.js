import React from 'react';
import { connect } from 'react-redux';

import './styles.sass';


// Stratégie de lecture depuis le store/state : on extrait des informations
// depuis le state global de l'application.
const mapStateToProps = (state) => {
  return {};
};

// Stratégie d'écriture dans le state global de l'application.
// La fonction dispatchers retourne un objet, chaque propriété va devenir
// un prop passée à un composant de présentation qui pourra utiliser les
// fonctions définies pour déclencher des dispatch().
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (event) => {
      console.log('clic on roll');
    }
  };
};

// Composant de présentation
const GameArea = ({ handleClick }) => {
  return <div className="game-area">
    <div className="action-zone">
      <h2 className="action-title">C'est votre tour</h2>
      <img className="action-img" alt="Cup with rolling dice" src="" />
      <button type="button" className="roll-button" onClick={handleClick}>&Agrave; vous d'faire</button>
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
