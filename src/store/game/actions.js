export const actions = {
  NEW_GAME: 'scores/action/NEW_GAME',
  CHANGE_GAME_STATUS: 'game/action/CHANGE_GAME_STATUS',
  ROLL_DICE: 'game/action/ROLL_DICE',
  DISPLAY_DICE: 'game/action/DISPLAY_DICE',
  NEXT_PLAYER: 'game/action/NEXT_PLAYER',
  CHANGE_CURRENT_TURN: 'game/action/CHANGE_CURRENT_TURN'
};

export const newGame = () => ({
  type: actions.NEW_GAME
});

export const changeGameStatus = () => ({
  type: actions.CHANGE_GAME_STATUS
});

export const rollDice = () => ({
  type: actions.ROLL_DICE
});

export const displayDice = (firstDie, secondDie, thirdDie, results) => ({
  type: actions.DISPLAY_DICE, firstDie, secondDie, thirdDie, results
});

export const nextPlayer = () => ({
  type: actions.NEXT_PLAYER
});

export const changeCurrentTurn = (currentPlayer) => ({
  type: actions.CHANGE_CURRENT_TURN, currentPlayer
});
