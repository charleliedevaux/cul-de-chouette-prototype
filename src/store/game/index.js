import { game as actions } from 'src/store/actions';


const initialState = {
  dice: {
    firstDie: null,
    secondDie: null,
    thirdDie: null
  },
  currentTurn: 'firstPlayer',
  rollStatus: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Roll the dice, check the results and calculate the points earned
    case actions.DISPLAY_DICE: {
      const firstDie = action.firstDie;
      const secondDie = action.secondDie;
      const thirdDie = action.thirdDie;
      const results = action.results;

      return {
        ...state,
        rollStatus: true,
        dice: {
          firstDie,
          secondDie,
          thirdDie
        },
        results
      };
    }
    default: {
      return state;
    }
  }
};
