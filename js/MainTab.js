import React from "react";
import {Image, View,YellowBox} from "react-native";
import { TabNavigator } from 'react-navigation'

import HomePage from "./page/HomePage";
import MinePage from "./page/MinePage";
import styles from './style/Css';
import {ColorEnd, ColorRed, Secondary_Text_Color, White} from "./style/BaseStyle";


const MainTabSelectedIcon = require("../img/i_home_foc.png");
const MainTabUnSelectedIcon = require("../img/i_home.png");
const MineTabUnSelectedIcon = require("../img/i_mine.png");
const MineTabSelectedIcon = require("../img/i_mine_foc.png");
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default MainTab = TabNavigator({

    Home: {
        screen: HomePage,
        navigationOptions:({navigation, screeProps}) => ({
            //设置StackNavigator属性
            // header:null,
            //标题
            drawerLabel: '地址簿',
            //标题
            title: "地址簿",
            drawerLockMode:'locked-closed',
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
        })
    },
    Mine: {
        screen: MinePage,
        navigationOptions:({navigation, screeProps}) => ({
            //这里设置StackNavigator属性和一般情况下Tabbar不同页面可能会不同的属性

            //设置StackNavigator属性
            // header:null,
            headerTitle: '我的',
            headerStyle:styles.navigator,
            headerTitleStyle:styles.navigatorTitle,
            gesturesEnabled:true,
            //这里设置Tabbar不同页面可能会不同的属性
            tabBarVisible: true,
            tabBarLabel:'我的',
            tabBarIcon:(({tintColor,focused}) => {
                return(
                    <Image
                        source={focused ? MineTabSelectedIcon : MineTabUnSelectedIcon}
                        style={styles.tabbarImage}
                    />
                )
            }),
        })
    }
},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'Home', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        activeTintColor:ColorEnd, // label和icon的前景色 活跃状态下（选中）。
        activeBackgroundColor:White,
        inactiveTintColor:Secondary_Text_Color, // label和icon的前景色 不活跃状态下(未选中)。
        inactiveBackgroundColor:White,
        pressColor: '#ccc',//点击时水波纹颜色 android>5.0
        showLabel:true,//是否显示 标签页
        showIcon:true,//是否显示图片
        upperCaseLabel:false,//标签（英文）文字是否大写
        scrollEnabled:false, //多个时（超出屏幕）标签页是否可以左右滑动
        style: {
            backgroundColor: '#EEEEEE',
        },
        labelStyle:{
            fontSize: 12,
            margin:0
        }, //label的样式。
        //标签页图片显示区域样式
        iconStyle:{
            margin:0
        },
        //单个标签页选项的样式
        tabStyle:{
            backgroundColor:'#ffffff',
            padding:2,//取消默认高度
        },
        //指示器样式
        indicatorStyle:{
            // backgroundColor:'#53a8eF',
            height:0,

        }
    }
})

