/**
 * 登录
 **/

import React, {PureComponent} from 'react';
import {Text, TextInput, TouchableHighlight, View} from "react-native";
import styles from "../style/Css";
import {ColorLineRed} from "../style/BaseStyle";
import HttpManager from "../data/http/HttpManager";


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
            phone: '18961722253'
        };

        this.httpManager = new HttpManager();
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
                    onHideUnderlay={() => {
                    }}
                    onShowUnderlay={() => {
                    }}
                    onPress={this.getVerCode}>
                    <Text style={[styles.unpress_login_btn_text]}>发送验证码</Text>
                </TouchableHighlight>

            </View>
        )
    }


    getVerCode = () => {
        let mobile = this.state.phone;
        let isTrueMobile;

        if(mobile.length===11){
            isTrueMobile = true;
        }else{
            isTrueMobile=false;
        }

        let params = {
            "object": this.state.phone,
        };

        this.httpManager.getVeriCode(params, (response) => {
            console.log("response.object", response.object);
            if (response.errCode === "000000") {
                alert("发送成功");
                this.props.navigation.navigate('LoginSecond', {param: this.state.phone})
            }
        });


        // this.props.navigation.navigate('LoginSecond', {param: this.state.phone})
    }
}

