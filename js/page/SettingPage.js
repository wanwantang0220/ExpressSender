/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class SettingPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '设置',
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
                <Text>设置</Text>
            </View>
        )
    }
}

