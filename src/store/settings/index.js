import { settings as actions } from 'src/store/actions';

const initialState = {
  rules: false
};

export default (state = initialState, action) => {
  console.log('reducer[settings] >>', action);

  switch (action.type) {
    default: {
      return state;
    }
  }
};
