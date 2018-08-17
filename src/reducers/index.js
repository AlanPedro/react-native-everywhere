import { combineReducers } from 'redux';

import testReducer from './testReducer';

const rootReducer = combineReducers({
  posts: testReducer,
})

export default rootReducer;
