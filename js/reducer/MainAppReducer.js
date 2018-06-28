import {combineReducers} from "redux";
import {NavigationActions} from "react-navigation";
import {RootNavigator} from '../MainAppNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('MainTab');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const secondAction = RootNavigator.router.getActionForPathAndParams('Login');


const initialNavState = RootNavigator.router.getStateForAction(
    tempNavState
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}


const MainAppReducer = combineReducers({
    nav,

});

export default MainAppReducer;