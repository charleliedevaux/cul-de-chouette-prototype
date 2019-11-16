import { scores as actions } from 'src/store/actions';

export default store => next => action => {

  console.log('middleware.scores', action);
  switch(action.type) {
  }
  next(action);
};
