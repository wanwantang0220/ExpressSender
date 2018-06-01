/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, ImageBackground} from "react-native";
import styles from "../style/Css";


export default class MinePage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '我的',
    };


    render() {

        return (
            <View style={styles.mainContainer}>

                <Text>我的</Text>
            </View>
        )
    }
}

