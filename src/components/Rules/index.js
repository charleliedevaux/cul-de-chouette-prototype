import React from 'react';

import { connect } from 'react-redux';

const Rules = () => {
  return <div className="rules">Here is the Rules section</div>;
};

// Stratégie de lecture depuis le store/state : on extrait des informations
// depuis le state global de l'application.
const mapStateToProps = (state) => {
  return {
    rules: state.rules
  }
};


const RulesContainer = connect(
  mapStateToProps,
  null             
)(Rules);

export default RulesContainer;
