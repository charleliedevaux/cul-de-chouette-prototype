export const actions = {
  ROLL_DICE: 'game/action/ROLL_DICE',
  DISPLAY_DICE: 'game/action/DISPLAY_DICE'
};

export const rollDice = () => ({
  type: actions.ROLL_DICE
});

export const displayDice = (firstDie, secondDie, thirdDie, results) => ({
  type: actions.DISPLAY_DICE, firstDie, secondDie, thirdDie, results
});
