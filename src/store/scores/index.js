import { scores as actions } from 'src/store/actions';

const initialState = {
  scores: {
    firstPlayer: 72,
    secondPlayer: 234,
    thirdPlayer: 4
  }
};

export default (state = initialState, action) => {
  console.log('reducer[scores] >>', action);

  switch (action.type) {
    default: {
      return state;
    }
  }
};
