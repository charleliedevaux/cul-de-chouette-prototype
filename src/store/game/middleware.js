import { game as actions } from 'src/store/actions';
import { displayDice, rollDice, changeCurrentTurn, changeGameStatus, nextPlayer } from 'src/store/game/actions';
import { checkScore, resetScores } from 'src/store/scores/actions';


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
    else if (b + c === a) {
      results = {
        combinationName: `Velute de ${a}`,
        turnScore: 2 * (a ** 2)
      };
    }
    else if (a + c === b) {
      results = {
        combinationName: `Velute de ${b}`,
        turnScore: 2 * (b ** 2)
      };
    }
    else if (a + b === c) {
      results = {
        combinationName: `Velute de ${c}`,
        turnScore: 2 * (c ** 2)
      };
    }
    else if (a === b || a === c) {
      results = {
        combinationName: `Chouette de ${a}`,
        turnScore: a ** 2
      };
    }
    else if (b === c) {
      results = {
        combinationName: `Chouette de ${b}`,
        turnScore: b ** 2
      };
    }
    return results;
  };

  switch (action.type) {
    // Start a new game
    case actions.NEW_GAME: {
      store.dispatch(resetScores());
      store.dispatch(changeGameStatus());
      break;
    }
    // Roll the dice, check the results and calculate the points earned
    case actions.ROLL_DICE: {
      const firstDie = randomDieNumber();
      const secondDie = randomDieNumber();
      const thirdDie = randomDieNumber();
      const results = checkResults(firstDie, secondDie, thirdDie);
      const currentPlayer = store.getState().game.currentTurn;

      store.dispatch(displayDice(firstDie, secondDie, thirdDie, results));
      store.dispatch(checkScore(currentPlayer, results.turnScore));

      const winner = store.getState().scores.winner;
      if (winner === '' && currentPlayer !== 'Joueur 1') {
        setTimeout(() => store.dispatch(nextPlayer()), 4000);
      }
      break;
    }
    // Skip to next player
    case actions.NEXT_PLAYER: {
      const currentPlayer = store.getState().game.currentTurn;
      store.dispatch(changeCurrentTurn(currentPlayer));
      // roll the dice if non-human player after a delay
      const nextTurn = store.getState().game.currentTurn;
      if (nextTurn !== 'Joueur 1') {
        setTimeout(() => store.dispatch(rollDice()), 1000);
      }
      break;
    }
  }
  next(action);
};
