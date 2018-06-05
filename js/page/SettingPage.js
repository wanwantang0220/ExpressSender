/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";
import styles from "../style/Css";


export default class SettingPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '设置',
        title:'设置',
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

                <View style={[styles.view_line_full,{marginTop:10}]}/>

                <View style={[styles.setting_content]}>

                    <Text>实名认证</Text>
                    <Text>认证</Text>
                </View>
                <Text>设置</Text>
            </View>
        )
    }
}

