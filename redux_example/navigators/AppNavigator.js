import LoginScreen from "../components/LoginScreen";
import MainScreen from "../components/MainScreen";
import ProfileScreen from "../components/ProfileScreen";
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from "react-navigation-redux-helpers";
import {connect} from "react-redux";
import { createStackNavigator } from 'react-navigation';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator,'root');

const mapStateToProps = state =>({
    state:state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);



export{RootNavigator,AppNavigator,middleware}

