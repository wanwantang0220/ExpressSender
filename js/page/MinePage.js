/**
 * 我的
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, ImageBackground} from "react-native";
import styles from "../style/Css";
import MineItem from "../component/MineItem";
import LinearGradient from "react-native-linear-gradient";
import {BackgroundColorLight, White} from "../style/BaseStyle";

const HEADER = require("../../img/headshot.png");
const MINE_EXPRESS = require("../../img/icon_express.png");
const MINE_ADDRESS = require("../../img/icon_place.png");
const MINE_CARD = require("../../img/icon_card.png");
const MINE_SETTING = require("../../img/icon_setting.png");
const MINE_ARROW = require("../../img/icon_arrow.png");

export default class MinePage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '我的',
    };


    render() {

        return (
            <View style={styles.mainContainer}>

                <View style={[styles.mine_view_header]}>
                    <Image style={[styles.mine_header]} source={HEADER} resizeMode={Image.resizeMode.contain}/>
                    <Text style={[styles.mine_header_text]}>注册/登录</Text>
                </View>

                <LinearGradient colors={[ BackgroundColorLight, White]} style={styles.lineargradient} />
                <View style={{backgroundColor:White}}>
                <View style={[styles.view_line_full]}/>
               <MineItem  logo={MINE_EXPRESS} style='express' content="我的快递" onPress={()=>{}}/>
                <View style={[styles.view_line]}/>
                <MineItem  logo={MINE_ADDRESS} style='express' content="地址簿" onPress={()=>{}}/>
                <View style={[styles.view_line]}/>
                <MineItem  logo={MINE_CARD} style='express' content="优惠券" onPress={()=>{}}/>
                <View style={[styles.view_line]}/>
                <MineItem  logo={MINE_SETTING} style='express' content="设置" onPress={()=>{}}/>
                <View style={[styles.view_line_full]}/>
                </View>
            </View>
        )
    }
}

