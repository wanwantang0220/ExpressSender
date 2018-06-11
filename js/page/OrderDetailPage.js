/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight} from "react-native";
import styles from "../style/Css";

const SETTING_ARROW = require('../../img/icon_arrow.png');

export default class OrderDetailPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '订单详情',
        title:'订单详情',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };


    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {


        return (
            <View style={[styles.container]}>

                <View style={{flex:4}}>
                    <View style={[styles.view_line_full,{marginTop:10}]}/>

                    <View style={[styles.view_line_full]}/>
                </View>

            </View>
        )
    }
}

