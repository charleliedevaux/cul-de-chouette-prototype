import { combineReducers } from 'redux';

import settings from 'src/store/settings';
import scores from 'src/store/scores';
import game from 'src/store/game';


export default combineReducers({
  settings,
  scores,
  game
});
