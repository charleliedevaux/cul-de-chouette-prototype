import { combineReducers } from 'redux';

import settings from 'src/store/settings';
import scores from 'src/store/scores';


export default combineReducers({
  settings,
  scores
});
