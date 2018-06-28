/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight} from "react-native";
import styles from "../style/Css";
import {White} from "../style/BaseStyle";

const SETTING_ARROW = require('../../img/icon_arrow.png');

export default class OrderDetailPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '订单详情',
        title: '订单详情',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };


    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    render() {


        return (
            <View style={[styles.mainContainer]}>

                <View style={{flexDirection: 'column', flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{flex: 5, marginStart: 10, marginTop: 5}}>订单号:11111111111</Text>
                        <Text style={{flex: 1, marginTop: 5}}>待签收</Text>
                    </View>
                    <View style={{flex: 3, backgroundColor: White}}>

                        <Image/>
                        <View>
                            <Text>物流公司</Text>
                            <Text>物流单号</Text>
                        </View>
                    </View>
                    <View style={{flex: 15, backgroundColor: White}}>

                    </View>
                </View>
            </View>
        )
    }
}

