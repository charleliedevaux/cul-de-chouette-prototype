export const actions = {
  RESET_SCORES: 'scores/action/RESET_SCORES',
  CHECK_SCORE: 'scores/actions/CHECK_SCORE',
  UPDATE_SCORE: 'scores/actions/UPDATE_SCORE'
};

export const resetScores = () => ({
  type: actions.RESET_SCORES
});

export const checkScore = (currentPlayer, currentScore) => ({
  type: actions.CHECK_SCORE, currentPlayer, currentScore
});

export const updateScore = (currentPlayer, currentScore, winner) => ({
  type: actions.UPDATE_SCORE, currentPlayer, currentScore, winner
});
