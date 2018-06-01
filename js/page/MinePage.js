/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class MinePage extends Component {

    static navigationOptions = {
        //标题
        drawerLabel: '我的',
    };


    render() {

        return (
            <View>
                <Text>我的</Text>
            </View>
        )
    }
}

