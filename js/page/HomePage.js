/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";
import styles from "../style/Css";

const MainTabSelectedIcon = require("../../img/i_home_foc.png");
const MainTabUnSelectedIcon = require("../../img/i_home.png");

export default class HomePage extends Component {

    static navigationOptions = {
        //设置StackNavigator属性
        header:null,
        headerTitle: '首页',
        headerStyle: styles.navigator,
        headerTitleStyle: styles.navigatorTitle,
        gesturesEnabled:true,

        //这里设置Tabbar不同页面可能会不同的属性
        tabBarVisible: true,
        tabBarLabel:'首页',
        tabBarIcon:(({tintColor,focused}) => {
            return(
                <Image
                    source={focused ? MainTabSelectedIcon : MainTabUnSelectedIcon}
                    style={styles.tabbarImage}
                />
            )
        }),
    };

    render() {

        return (
            <View>
                <Text>首页</Text>
            </View>
        )
    }
}

