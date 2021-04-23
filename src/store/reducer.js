import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import homeReducer from '../containers/Home/store/reducer';

const history = createBrowserHistory(); 

const combineAppReducers = combineReducers({
   router: connectRouter(history),
   homeReducer, 
});

const rootReducer = (state, action) => combineAppReducers(state, action);

export default rootReducer;

