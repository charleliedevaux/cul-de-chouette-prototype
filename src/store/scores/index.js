import { scores as actions } from 'src/store/actions';

const initialState = {
  scores: {
    firstPlayer: 0,
    secondPlayer: 0,
    thirdPlayer: 0
  },
  winner: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Update the score with data received from CHECK_SCORE
    case actions.UPDATE_SCORE: {
      const currentScore = action.currentScore;
      const currentPlayer = action.currentPlayer;
      const winner = action.winner;

      if (currentPlayer === 'Joueur 1') {
        return {
          ...state, scores: { ...state.scores, firstPlayer: currentScore }, winner
        };
      }
      if (currentPlayer === 'Joueur 2') {
        return {
          ...state, scores: { ...state.scores, secondPlayer: currentScore }, winner
        };
      }
      if (currentPlayer === 'Joueur 3') {
        return {
          ...state, scores: { ...state.scores, thirdPlayer: currentScore }, winner
        };
      }
      break;
    }
    // Reset the scores when a new game is started
    case actions.RESET_SCORES: {
      return {
        ...state, scores: { firstPlayer: 0, secondPlayer: 0, thirdPlayer: 0 }
      };
    }
    default: {
      return state;
    }
  }
};
