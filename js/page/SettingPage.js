/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight} from "react-native";
import styles from "../style/Css";

const SETTING_ARROW = require('../../img/icon_arrow.png');

export default class SettingPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '设置',
        title: '设置',
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
            <View style={[styles.container]}>

                <View style={{flex: 4}}>
                    <View style={[styles.view_line_full, {marginTop: 10}]}/>
                    <TouchableHighlight
                        activeOpacity={0.7}
                        underlayColor='green'
                        onHideUnderlay={() => {
                        }}
                        onShowUnderlay={() => {
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('Login')
                        }}>

                        <View style={[styles.setting_content]}>

                            <Text style={styles.setting_left}>实名认证</Text>
                            <Text style={styles.setting_right}>认证</Text>
                            <Image style={styles.setting_right_arrow} source={SETTING_ARROW}
                                   resizeMode={Image.resizeMode.contain}/>

                        </View>

                    </TouchableHighlight>
                    <View style={[styles.view_line_full]}/>
                </View>
                <View style={{flex: 1}}>
                    <View style={[styles.onpress_login_btn, {justifyContent: 'center'}]}>
                        <Text style={[styles.unpress_login_btn_text]}>退出登录</Text>
                    </View>
                </View>
            </View>
        )
    }
}

