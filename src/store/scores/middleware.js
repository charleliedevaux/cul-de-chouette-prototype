import { scores as actions } from 'src/store/actions';

import { updateScore } from 'src/store/scores/actions';


export default store => next => action => {
  switch (action.type) {
    // Calculate Scores and check if player has won
    case actions.CHECK_SCORE: {
      const currentScore = action.currentScore;
      const currentPlayer = action.currentPlayer;
      let playerID = '';
      // Find the right key
      if (currentPlayer === 'Joueur 1') {
        playerID = 'firstPlayer';
      }
      else if (currentPlayer === 'Joueur 2') {
        playerID = 'secondPlayer';
      }
      else if (currentPlayer === 'Joueur 3') {
        playerID = 'thirdPlayer';
      }
      // Calculate score
      const newScore = store.getState().scores.scores[playerID] + currentScore;
      // Check winning condition
      let winner = '';
      if (newScore >= 15) {
        winner = currentPlayer;
      }
      // Update score
      store.dispatch(updateScore(currentPlayer, newScore, winner));
      break;
    }
  }
  next(action);
};
