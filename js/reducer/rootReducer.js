'use strict';

import { combineReducers } from 'redux';
import loginIn from './loginReducer';

const rootReducer = combineReducers({
    loginIn: loginIn,
    // counter: counter,
});

export default rootReducer;