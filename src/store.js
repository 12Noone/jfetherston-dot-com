import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

export default function configureStore() {
 return createStore(
  form,
   applyMiddleware(thunk)
 );
}

