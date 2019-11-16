import { game as actions } from 'src/store/actions';
import { displayDice } from 'src/store/game/actions';
import { updateScore } from 'src/store/scores/actions';

export default store => next => action => {

  // Produce a random int between 1 and 6
  const randomDieNumber = () => Math.floor(Math.random() * (6)) + 1;

  // Function to compare the dice roll to existing combinations and generate the results
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

  console.log('middleware.game', action);
  switch (action.type) {
    // Roll the dice, check the results and calculate the points earned
    case actions.ROLL_DICE: {
      const firstDie = randomDieNumber();
      const secondDie = randomDieNumber();
      const thirdDie = randomDieNumber();
      const results = checkResults(firstDie, secondDie, thirdDie);
      const currentPlayer = store.getState().game.currentTurn;

      store.dispatch(displayDice(firstDie, secondDie, thirdDie, results));
      store.dispatch(updateScore(currentPlayer, results.turnScore));
    }
  }
  next(action);
};
