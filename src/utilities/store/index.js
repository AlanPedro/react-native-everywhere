import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import rootReducer from '../../reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;


// TODO: Apply middleware
