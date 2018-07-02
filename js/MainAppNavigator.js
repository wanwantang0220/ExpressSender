// import {createReactNavigationReduxMiddleware, reduxifyNavigator} from "react-navigation-redux-helpers";
// import {createStackNavigator} from "react-navigation";
// import {connect} from "react-redux";
// import OrderDetailPage from "./page/OrderDetailPage";
// import LoginSecondPage from "./page/LoginSecondPage";
// import CouponListPage from "./page/CouponListPage";
// import ExpressListPage from "./page/ExpressListPage";
// import AddressEditPage from "./page/AddressEditPage";
// import MinePage from "./page/MinePage";
// import AddressAddPage from "./page/AddressAddPage";
// import LoginPage from "./page/LoginPage";
// import MainTab from "./MainTab";
// import HomePage from "./page/HomePage";
// import AddressListPage from "./page/AddressListPage";
// import ReduxIndexPage from "./page/ReduxIndexPage";
// import SettingPage from "./page/SettingPage";
//
//
// const mainMiddleware = createReactNavigationReduxMiddleware(
//     'root',
//     state => state.nav
// );
//
// const RootNavigator = createStackNavigator({
//     MainTab: {
//         screen: MainTab,
//     },
//     // // 下面三个页面我需要隐藏导航栏
//     // Home: {
//     //     screen: HomePage,
//     //     // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
//     // },
//     // Mine: {
//     //     screen: MinePage,
//     //     // navigationOptions: ({navigation}) => ({header:null, gesturesEnable:true})
//     // },
//     AddressList: {
//         screen: AddressListPage,
//     },
//     ExpressList: {
//         screen: ExpressListPage,
//     },
//     CouponList: {
//         screen: CouponListPage
//     },
//     Settings: {
//         screen: SettingPage
//     },
//     Login: {
//         screen: LoginPage,
//         // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
//
//     },
//     LoginSecond: {
//         screen: LoginSecondPage
//     },
//     AddressAdd: {
//         screen: AddressAddPage
//     },
//     AddressEdit: {
//         screen: AddressEditPage
//     },
//     OrderDetail: {
//         screen: OrderDetailPage
//     },
//     ReduxIndex: {
//         screen: ReduxIndexPage
//     }
// });
//
//
// const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
//
// /**
//  * 传入所有state，返回指定的state数据
//  */
// const mapStateToProps = state => ({
//     state: state.nav,
// });
//
// /***
//  * connect为redux中常用的功能实现了和react连接的建立
//  */
// const MainAppNavigator = connect(mapStateToProps)(AppWithNavigationState);
//
//
// export {RootNavigator, MainAppNavigator, mainMiddleware}
