/**
 * 我的快递列表
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class ExpressListPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '我的快递列表',
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
            <View>
                <Text>我的快递列表</Text>
            </View>
        )
    }
}

