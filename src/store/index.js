import { createStore } from 'redux';


// Logic to store and handle data
import reducer from './reducer';


// Creating the app store with its pirvate state
const reactModelStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// FIXME: Remove when in production
window.store = reactModelStore;

export default reactModelStore;
