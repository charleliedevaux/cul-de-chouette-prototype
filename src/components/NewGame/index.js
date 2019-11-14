import React from 'react';

import './styles.sass';


// Composant de présentation
const NewGame = () => {
  return <div className="new-game">
    <h2 className="new-game-title">S'que vous voulez qu'on se fasse un petit cul de chouette ?</h2>
    <p className="new-game-quote">"Allez, ça nous détendra !"</p>
    <button type="button" className="start-button">C'est parti !</button>
  </div>;
};


export default NewGame;
