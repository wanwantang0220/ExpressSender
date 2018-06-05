/**
 * 登录
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class SettingPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '登录',
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
                <Text>登录</Text>
            </View>
        )
    }
}

