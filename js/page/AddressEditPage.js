/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight, TextInput} from "react-native";
import styles from "../style/Css";
import {BlackColor, GrayColor, GrayWhiteColor} from "../style/BaseStyle";

const SETTING_ARROW = require('../../img/icon_arrow.png');

export default class AddressEditPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '编辑地址',
        title: '编辑地址',
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

                <View style={{flex: 1, flexDirection: 'column', marginTop: 10, backgroundColor: '#ffffff'}}>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>姓名</Text>
                        <TextInput style={[styles.add_address_textinput]}
                                   placeholder='请输入姓名'
                                   underlineColorAndroid='#00000000'/>
                    </View>
                    <View style={[styles.view_line]}/>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>联系方式</Text>
                        <TextInput style={[styles.add_address_textinput]}
                                   placeholder='请输入联系方式'
                                   underlineColorAndroid='#00000000'/>
                    </View>
                    <View style={[styles.view_line]}/>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>所在区域</Text>
                        <Text style={[styles.add_address_textinput]}
                              placeholder='请选择区域'
                              underlineColorAndroid='#00000000'/>
                    </View>
                    <View style={[styles.view_line]}/>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>详细地址</Text>
                        <TextInput style={[styles.add_address_textinput]}
                                   placeholder='请填写详细地址'
                                   underlineColorAndroid='#00000000'/>
                    </View>
                    <View style={[styles.view_line]}/>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>地址类型</Text>
                        <TextInput style={[styles.add_address_textinput]}
                                   placeholder='ceshi '
                                   underlineColorAndroid='#00000000'/>
                    </View>
                </View>


                <View style={{flex: 1, marginTop: 30}}>
                    <View style={[styles.onpress_login_btn]}>
                        <Text style={[styles.unpress_login_btn_text]}>保存</Text>
                    </View>
                </View>

            </View>
        )
    }
}

