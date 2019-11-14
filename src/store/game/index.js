import { game as actions } from 'src/store/actions';

const initialState = {
  dices: {
    firstDie: 1,
    secondDie: 1,
    thirdDie: 1
  }
};

export default (state = initialState, action) => {
  console.log('reducer[game] >>', action);

  switch (action.type) {
    case actions.START_GAME: {
      // TODO: launch reset scores action, then go to game view.
      console.log('game started');
      return state;
    }
    default: {
      return state;
    }
  }
};
