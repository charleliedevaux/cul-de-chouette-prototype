import { game as actions } from 'src/store/actions';


const initialState = {
  dice: {
    firstDie: null,
    secondDie: null,
    thirdDie: null
  },
  currentTurn: 'firstPlayer',
  gameStatus: false,
  rollStatus: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Change the status of the at the start or end of a game
    case actions.CHANGE_GAME_STATUS: {
      return {
        ...state,
        gameStatus: !state.gameStatus
      };
    }
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
    case actions.CHANGE_CURRENT_TURN: {
      let newPlayer = '';
      if (action.currentPlayer === 'firstPlayer') {
        newPlayer = 'secondPlayer';
      }
      if (action.currentPlayer === 'secondPlayer') {
        newPlayer = 'thirdPlayer';
      }
      if (action.currentPlayer === 'thirdPlayer') {
        newPlayer = 'firstPlayer';
      }
      return {
        ...state,
        currentTurn: newPlayer,
        rollStatus: false
      };
    }
    default: {
      return state;
    }
  }
};
