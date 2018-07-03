/**
 * 登录
 **/

import React, {PureComponent} from 'react';
import {Text, TextInput, TouchableHighlight, TouchableOpacity, View} from "react-native";
import styles from "../style/Css";
import {ColorLineRed} from "../style/BaseStyle";
import HttpManager from "../data/http/HttpManager";
import {connect} from "react-redux";
import {NavigationActions ,StackActions} from 'react-navigation';
import * as verCodeAction from "../actions/verCodeAction";

const BgUnOnPress = styles.unpress_login_btn;
const BgOnPress = styles.onpress_login_btn;

class LoginPage extends PureComponent {

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

    shouldComponentUpdate(nextProps, nextState) {

        // 登录完成,切成功登录
        if (nextProps.status === 'success' && nextProps.isSuccess) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'LoginSecond', params: {phone:this.state.phone}})
                ]
            });
            console.log("result","发送成功");
            this.props.navigation.dispatch(resetAction);
            return false;
        }
        return true;
    }


    componentWillUnmount() {

    }

    render() {

        console.log('debug', 'login---- render');
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

                <TouchableOpacity
                    style={btnBg}
                    activeOpacity={0.7}
                    underlayColor='green'
                    onHideUnderlay={() => {
                    }}
                    onShowUnderlay={() => {
                    }}
                    onPress={this.getVerCode}>
                    <Text style={[styles.unpress_login_btn_text]}>发送验证码</Text>
                </TouchableOpacity>

            </View>
        )
    }


    getVerCode = () => {
        let mobile = this.state.phone;
        let isTrueMobile;
        const {verCode} = this.props;

        if (mobile.length === 11) {
            isTrueMobile = true;
        } else {
            isTrueMobile = false;
        }

        let params = {
            "object": this.state.phone,
        };


        verCode(params);

    }
}


const mapStateToProps = (state) => ({
    status: state.verCode.status,
    isSuccess: state.verCode.isSuccess,
    object: state.verCode.object,
});

const mapDispatchToProps = (dispatch) => ({
    verCode: param => dispatch(verCodeAction.verCode(param)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

