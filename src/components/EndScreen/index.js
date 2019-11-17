import React from 'react';
import { connect } from 'react-redux';

import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { winner } = state.scores;
  return { winner };
};

// Strategy to write in global state
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickOnRestart: (event) => () => {
      document.location.reload();
    },
    handleClickOnQuit: (event) => () => {
      document.location = '/';
    }
  };
};

// Presentational Component
const GameArea = ({ winner, handleClickOnRestart, handleClickOnQuit }) => {
  // Preparing an id for css styles
  let winnerID = '';
  if (winner === 'Joueur 2') {
    winnerID = 'second-winner-tag';
  }
  if (winner === 'Joueur 3') {
    winnerID = 'third-winner-tag';
  }

  return <div className="end-screen">
    {/* Title */}
    {
      winner === 'Joueur 1'
        ? <p className="end-screen-title">
          Vous remportez la partie !
        </p>
        : <p className="end-screen-title">
          <span className="winner-tag" id={winnerID}>
            {winner}
          </span> remporte la partie !
        </p>
    }
    {/* Quote */}    
    <p className="end-screen-quote">
      {
        winner === 'Joueur 1' ? '"C\'qui compte, c\'est les valeurs..."' : '"Ouais, c\'est dommage, c\'était vâchement bien..."'
      }
    </p>
    {/* Restart and Quit buttons */}
    <button type="button" className="restart-button" onClick={handleClickOnRestart()}>Encore une petite ?</button>
    <button type="button" className="quit-button" onClick={handleClickOnQuit()}>On va vous laisser fermer, patron...</button>
  </div>;
};


const GameAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameArea);

export default GameAreaContainer;
