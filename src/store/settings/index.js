import { settings as actions } from 'src/store/actions';

const initialState = {
  rules: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_RULES: {
      return {
        ...state, rules: !state.rules
      };
    }

    default: {
      return state;
    }
  }
};
