import { game as actions } from 'src/store/actions';

const initialState = {
  dices: {
    firstDie: 1,
    secondDie: 1,
    thirdDie: 1
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
