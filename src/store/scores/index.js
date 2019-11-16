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
      const newScore = state.scores[currentPlayer] + currentScore;

      if (currentPlayer === 'firstPlayer') {
        return {
          ...state, scores: { ...state.scores, firstPlayer: newScore }
        };
      }
      if (currentPlayer === 'secondPlayer') {
        return {
          ...state, scores: { ...state.scores, secondPlayer: newScore }
        };
      }
      if (currentPlayer === 'thirdPlayer') {
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
