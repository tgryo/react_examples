import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';

const rootReducer = combineReducers({
  routing: routerReducer,
  common: common,
});

export default rootReducer;
