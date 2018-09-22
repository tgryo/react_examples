import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export default function configureStore(history, initialState) {
  const middleware = [sagaMiddleware];
  middleware.push(sagaMiddleware);
  middleware.push(routerMiddleware(history));
  middleware.push(logger);

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      ...middleware
    )
  );

  sagaMiddleware.run(rootSaga, { history });
  return store;
}
