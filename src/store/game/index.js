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

// On renvoie un entier aléatoire entre 1 et 6.
function randomDieNumber() {
  return Math.floor(Math.random() * (6)) + 1;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ROLL_DICE: {
      return {
        ...state,
        rollStatus: true,
        dice: {
          firstDie: randomDieNumber(),
          secondDie: randomDieNumber(),
          thirdDie: randomDieNumber()
        }
      };
    }
    default: {
      return state;
    }
  }
};
