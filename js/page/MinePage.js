/**
 * 我的
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, ImageBackground} from "react-native";
import styles from "../style/Css";

const HEADER = require("../../img/headshot.png");

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

                <Text>我的</Text>
            </View>
        )
    }
}

