import { RESET_PROPS_STATE } from 'Constants/actionTypes';

const INIT_STATE = {
  loading: false,
  error: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESET_PROPS_STATE:
      return { ...state, error: null };
    default:
      return { ...state };
  }
};
