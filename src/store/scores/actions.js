export const actions = {
  RESET_SCORES: 'scores/action/RESET_SCORES',
  UPDATE_SCORE: 'scores/actions/UPDATE_SCORE'
};

export const resetScores = () => ({
  type: actions.RESET_SCORES
});

export const updateScore = (currentPlayer, currentScore) => ({
  type: actions.UPDATE_SCORE, currentPlayer, currentScore
});
