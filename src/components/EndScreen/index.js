import React from 'react';
import { connect } from 'react-redux';

import './styles.sass';


// Strategy to read from global state
const mapStateToProps = (state) => {
  return {};
};

// Presentational Component
const GameArea = () => {

  return <div> HELLLOOOOOOO
  </div>;
};


const GameAreaContainer = connect(
  mapStateToProps,
  null
)(GameArea);

export default GameAreaContainer;
