import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/root-reducer';
import createLogger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(createLogger(
      {collapsed: true}
    ))
  )
);

