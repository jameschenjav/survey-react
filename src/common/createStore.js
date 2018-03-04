import { createStore, compose } from 'redux';
import reducer from './reducer';

// const sagaMiddleware = createSagaMiddleware();

export default function () {
  const enhancers = []; // [ applyMiddleware(...middlewares), ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
      : compose;
  /* eslint-enable */

  const store = createStore(
    reducer,
    { form: {}, fields: [] },
    composeEnhancers(...enhancers),
  );

  return store;
}
