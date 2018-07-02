import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import {createStackNavigator, StackNavigator} from 'react-navigation';
import OrderDetailPage from "../page/OrderDetailPage";
import LoginSecondPage from "../page/LoginSecondPage";
import SettingPage from "../page/SettingPage";
import AddressAddPage from "../page/AddressAddPage";
import MainTab from "../MainTab";
import ExpressListPage from "../page/ExpressListPage";
import AddressEditPage from "../page/AddressEditPage";
import ReduxIndexPage from "../page/ReduxIndexPage";
import AddressListPage from "../page/AddressListPage";
import CouponListPage from "../page/CouponListPage";
import LoginPage from "../page/LoginPage";

const App = createStackNavigator({
    MainTab: {
        screen: MainTab,
    },
    // // 下面三个页面我需要隐藏导航栏
    // Home: {
    //     screen: HomePage,
    //     // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    // },
    // Mine: {
    //     screen: MinePage,
    //     // navigationOptions: ({navigation}) => ({header:null, gesturesEnable:true})
    // },
    AddressList: {
        screen: AddressListPage,
    },
    ExpressList: {
        screen: ExpressListPage,
    },
    CouponList: {
        screen: CouponListPage
    },
    Settings: {
        screen: SettingPage
    },
    Login: {
        screen: LoginPage,
        // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})

    },
    LoginSecond: {
        screen: LoginSecondPage
    },
    AddressAdd: {
        screen: AddressAddPage
    },
    AddressEdit: {
        screen: AddressEditPage
    },
    OrderDetail: {
        screen: OrderDetailPage
    },
    ReduxIndex: {
        screen: ReduxIndexPage
    }
});


export default App
