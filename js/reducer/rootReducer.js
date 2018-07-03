'use strict';

import {combineReducers} from 'redux';
import loginIn from './loginReducer';
import verCode from './verCodeReducer';

const rootReducer = combineReducers({
    verCode: verCode,
    loginIn: loginIn,
    // counter: counter,
});

export default rootReducer;