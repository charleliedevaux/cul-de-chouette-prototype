import { createStore } from 'redux';


// Logique de stockage et de manipulation des données de l'application.
import reducer from './reducer';


// Création du store de l'application, avec son state privé.
const reactModelStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Juste pour debugguer, ne pas laisser en production.
console.log('Store', reactModelStore);
window.store = reactModelStore;

export default reactModelStore;
