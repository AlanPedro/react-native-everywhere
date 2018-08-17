import { combineReducers } from 'redux';

import testReducer from './testReducer';

const rootReducer = combineReducers({
  counter: testReducer,
})

export default rootReducer;
