import {combineReducers} from "redux";
import {RootNavigator} from '../navigators/AppNavigator';
import {NavigationActions} from "react-navigation";


const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Login');



const initialNavState = RootNavigator.router.getStateForAction(
    secondAction,
    tempNavState
);

function nav(state=initialNavState,action) {
    let nextState;
    switch (action.type){
        case 'Login':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Logout':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;

    }

    return nextState || state;
}

const initialAuthState = { isLoggedIn: false };

function auth(state =initialAuthState,action) {
    switch (action.type){
        case 'Login':
            return {...state, isLoggedIn: true};
        case 'Logout':
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

const initialAddressListState = {
    addressList:[],
    isLoading:true,
    isLoadingMore:false,
    isRefreshing:false
};
function addresslist(state=initialAddressListState,action) {
    switch (action.type){
        case '':
            return Object.assign({}, state, {
                addressList: action.addressList
            });
        default:
            return state;
    }

}

/***
 *  使用 ES6 的对象字面量简写方式定义对象结构
 *  reducer 函数 拆分成多个单独的函数，拆分后的每个函数负责独立管理 state 的一部分
 *  combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，
 *  然后就可以对这个 reducer 调用 createStore 方法。
 *
 *  一个调用 reducers 对象里所有 reducer 的 reducer，并且构造一个与 reducers 对象结构相同的 state 对象
 */
const AppReducer = combineReducers({
    nav,
    auth,
});

export default AppReducer;