import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(logger),
);

export default store;