/**
 * 登录
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TextInput, TouchableHighlight} from "react-native";
import styles from "../style/Css";
import {ColorLineRed, White} from "../style/BaseStyle";


const BgUnOnPress = styles.unpress_login_btn;
const BgOnPress = styles.onpress_login_btn;

export default class SettingPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '注册登录',
        title: '注册登录',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerLeft: <View/>,
        headerRight: <View/>
    };


    constructor(props) {
        super(props);

        this.state = {
            phone: ''
        }
    }

    componentDidMount() {

    }

    render() {

        const btnBg = this.state.phone === "" ? BgUnOnPress : BgOnPress;

        return (
            <View style={[styles.mainContainer]}>

                <View style={[styles.login_view]}>
                    <Text style={[styles.login_text]}>喜来快递欢迎你</Text>

                    <TextInput
                        placeholder='请输入手机号码'
                        style={[styles.login_input]}
                        keyboardType='numeric'
                        maxLength={11}
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({phone})}
                        underlineColorAndroid={ColorLineRed}/>
                </View>

                <TouchableHighlight
                    style={btnBg}
                                    activeOpacity={0.7}
                                    underlayColor='green'
                                    onHideUnderlay={()=>{}}
                                    onShowUnderlay={()=>{}}
                                    onPress={()=>{this.props.navigation.navigate('LoginSecond',
                                        {param:this.state.phone})}}>
                    <Text style={[styles.unpress_login_btn_text]}>发送验证码</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

