import LoginScreen from "../components/LoginScreen";
import MainScreen from "../components/MainScreen";
import ProfileScreen from "../components/ProfileScreen";
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from "react-navigation-redux-helpers";
import {connect} from "react-redux";
import { createStackNavigator } from 'react-navigation';

// 注意: createReactNavigationReduxMiddleware 必须在 createReduxBoundAddListener 之前执行
// createReactNavigationReduxMiddleware 创建中间件
const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
});

/***
 * Param key needs to be unique for the Redux store. Most people only have one store, so can use any string (eg. "root"),
 * as long as it's consistent with the call to reduxifyNavigator below.
 * @type {React.ComponentType<{state: ; dispatch: Dispatch}>}
 */
const AppWithNavigationState = reduxifyNavigator(RootNavigator,'root');

/**
 * 传入所有state，返回指定的state数据
 */
const mapStateToProps = state =>({
    state:state.nav,
});

/***
 * connect为redux中常用的功能实现了和react连接的建立
 */
const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);



export{RootNavigator,AppNavigator,middleware}


