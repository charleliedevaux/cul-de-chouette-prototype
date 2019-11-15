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
