import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { resetScores } from 'src/store/scores/actions';
import './styles.sass';


// Stratégie d'écriture dans le state global de l'application.
// La fonction dispatchers retourne un objet, chaque propriété va devenir
// un prop passée à un composant de présentation qui pourra utiliser les
// fonctions définies pour déclencher des dispatch().
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleClick: (event) => {
      dispatch(resetScores());
      props.history.push('/game');
    }
  };
};

// Composant de présentation
const NewGame = ({ handleClick }) => {
  return <div className="new-game">
    <h2 className="new-game-title">S'que vous voulez qu'on se fasse un petit cul de chouette ?</h2>
    <p className="new-game-quote">"Allez, ça nous détendra !"</p>
    <button type="button" className="start-button" onClick={handleClick}>C'est parti !</button>
  </div>;
};


const NewGameContainer = withRouter(connect(
  null,
  mapDispatchToProps
)(NewGame));

export default NewGameContainer;
