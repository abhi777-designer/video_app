import { routerMiddleware, connectRouter } from 'connected-react-router';
import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducer';
import rootSaga from './saga';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export {store, history};