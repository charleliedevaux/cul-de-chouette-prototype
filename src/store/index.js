import { createStore, applyMiddleware, compose } from 'redux';


// Logic to store and handle data
import gameMiddleware from 'src/store/game/middleware';
import reducer from './reducer';

const middlewares = applyMiddleware(gameMiddleware);

const withReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the app store with its pirvate state
const reactModelStore = createStore(
  reducer,
  withReduxDevTools(middlewares)
);

// FIXME: Remove when in production
window.store = reactModelStore;

export default reactModelStore;
