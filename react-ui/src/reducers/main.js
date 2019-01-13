import * as ActionTypes from '../actions/types/formActionTypes';

const initialState = {
  contactSuccessState: false
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CONTACT_FORM_SUBMITTED: {
      return Object.assign({}, state, { contactSuccessState: action.payload });
    }
    default: return state;
  }
};

export default mainReducer;
