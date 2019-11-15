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
const randomDieNumber = () => Math.floor(Math.random() * (6)) + 1;

const checkResults = (a, b, c) => {
  let results = {
    combinationName: 'Rien du tout !',
    turnScore: 0
  };
  if (a === b && b === c) {
    results = {
      combinationName: 'Cul de Chouette !',
      turnScore: 40 + (10 * a)
    };
  }
  if (b + c === a) {
    results = {
      combinationName: `Velute de ${a}`,
      turnScore: 2 * (a ** 2)
    };
  }
  if (a + c === b) {
    results = {
      combinationName: `Velute de ${b}`,
      turnScore: 2 * (b ** 2)
    };
  }
  if (a + b === c) {
    results = {
      combinationName: `Velute de ${c}`,
      turnScore: 2 * (c ** 2)
    };
  }
  if (a === b || a === c) {
    results = {
      combinationName: `Chouette de ${a}`,
      turnScore: a ** 2
    };
  }
  if (b === c) {
    results = {
      combinationName: `Chouette de ${b}`,
      turnScore: b ** 2
    };
  }
  return results;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ROLL_DICE: {
      const firstDie = randomDieNumber();
      const secondDie = randomDieNumber();
      const thirdDie = randomDieNumber();

      const results = checkResults(firstDie, secondDie, thirdDie);

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
