/**
 * 优惠券列表
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class CouponListPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '优惠券列表',
        title: '优惠券列表',
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
            <View>
                <Text>优惠券列表</Text>
            </View>
        )
    }
}

