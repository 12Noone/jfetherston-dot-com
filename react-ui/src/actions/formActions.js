import fetch from 'isomorphic-fetch';


function triggerNextState(response) {
  console.log(response);
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
