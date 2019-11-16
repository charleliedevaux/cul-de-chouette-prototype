import { scores as actions } from 'src/store/actions';

const initialState = {
  scores: {
    firstPlayer: 0,
    secondPlayer: 0,
    thirdPlayer: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Reset the scores when a new game is started
    case actions.UPDATE_SCORE: {
      const currentScore = action.currentScore;
      const currentPlayer = action.currentPlayer;
      let newScore = 0;

      if (currentPlayer === 'Joueur 1') {
        newScore = state.scores.firstPlayer + currentScore;
        return {
          ...state, scores: { ...state.scores, firstPlayer: newScore }
        };
      }
      if (currentPlayer === 'Joueur 2') {
        newScore = state.scores.secondPlayer + currentScore;
        return {
          ...state, scores: { ...state.scores, secondPlayer: newScore }
        };
      }
      if (currentPlayer === 'Joueur 3') {
        newScore = state.scores.thirdPlayer + currentScore;
        return {
          ...state, scores: { ...state.scores, thirdPlayer: newScore }
        };
      }
      break;
    }
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
