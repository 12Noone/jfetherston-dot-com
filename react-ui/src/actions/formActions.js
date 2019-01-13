import fetch from 'isomorphic-fetch';
import * as ActionType from './types/formActionTypes';

function triggerNextState(response) {
  console.log(response);
  return {
    type: ActionType.CONTACT_FORM_SUBMITTED,
    payload: true
  };
}

export function submitMessage(formValue) {
  return (dispatch) => {
    return fetch('/api/contact',
      {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(formValue)
      })
      .then(response => response.json())
      .then(json => dispatch(triggerNextState(json)));
  };
}
