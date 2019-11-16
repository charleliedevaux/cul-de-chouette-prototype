import React from 'react';
import { connect } from 'react-redux';

import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  const { dice } = state.game;
  return { dice };
};

// Presentational Component
const GameArea = ({ dice }) => {

  const firstDie = dice.firstDie;
  const secondDie = dice.secondDie;
  const thirdDie = dice.thirdDie;

  return <div className="dice-container">
    <div className="die">
      <img id="first-die" className="die-img" alt={`face ${firstDie} du dé`} src={`src/components/GameArea/assets/images/dark${firstDie}.png`} />
      <p className="die-number">{firstDie}</p>
    </div>
    <div className="die">
      <img id="second-die" className="die-img" alt={`face ${secondDie} du dé`} src={`src/components/GameArea/assets/images/dark${secondDie}.png`} />
      <p className="die-number">{secondDie}</p>
    </div>
    <div className="die">
      <img id="third-die" className="die-img" alt={`face ${thirdDie} du dé`} src={`src/components/GameArea/assets/images/dark${thirdDie}.png`} />
      <p className="die-number">{thirdDie}</p>
    </div>
  </div>;
};


const GameAreaContainer = connect(
  mapStateToProps,
  null
)(GameArea);

export default GameAreaContainer;
