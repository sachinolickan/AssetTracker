import {combineReducers} from 'redux';
import signInReducer from './signinreducer';
import secureReducer from './securereducer';
import tokenReducer from './tokenreducer';

export default combineReducers({
    signDetails:signInReducer,
    secureDetails:secureReducer,
    newToken:tokenReducer
});