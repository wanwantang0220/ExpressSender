/**
 * 地址列表
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";


export default class AddressListPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '地址列表',
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
                <Text>地址列表</Text>
            </View>
        )
    }
}

