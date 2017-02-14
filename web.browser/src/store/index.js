import appReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));
