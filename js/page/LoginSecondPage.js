/**
 * 登录
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity} from "react-native";
import styles from "../style/Css";
import {ColorLineRed, GrayColor, White} from "../style/BaseStyle";
import TimerButton from "../component/TimerButton";
import HttpManager from "../data/http/HttpManager";
import {storage} from '../data/storeage/Storage';
import {RESULT_OK} from "../data/http/ContastURL";
import {connect} from "react-redux";
import * as loginAction from "../actions/loginAction";
import {StackActions, NavigationActions} from "react-navigation";


const BgUnOnPress = styles.unpress_login_btn;
const BgOnPress = styles.onpress_login_btn;

class LoginSecondPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '短信验证',
        title: '短信验证',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };

    constructor(props) {
        super(props);

        this.state = {
            phone: '18961722253',
            vercode: '',
            timer: -1,
            state: '成功',
        }
        this.requestAPI = this.requestAPI.bind(this);
        this.httpManager = new HttpManager();
    }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === 'success' && nextProps.isSuccess) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routerName: 'MainTab'})
                ]
            });
            console.log("status", nextProps.status);
            this.props.navigation.dispatch(resetAction);
            return false;
        } else {
            console.log("status", nextProps.status);
        }
        return true;
    }


    render() {

        const {phone} = this.props.navigation.state.params;
        const cur_phone = phone ? phone : '';
        const btnBg = this.state.vercode === "" ? BgUnOnPress : BgOnPress;

        return (
            <View style={[styles.mainContainer]}>

                <View style={[styles.login_view]}>
                    <Text style={[styles.login_text]}>喜来快递欢迎你</Text>
                    <View style={[styles.login_second_view, {flexDirection: 'row'}]}>
                        <Text style={[styles.login_second_text]}>{phone}</Text>
                        <TimerButton
                            style={styles.login_second_time}
                            enable={cur_phone.length}
                            textStyle={{color: 'blue'}}
                            timerCount={30}
                            timerActiveTitle={['请在（', 's）后重试']}
                            onClick={(shouldStartCounting) => {
                                // shouldStartCountting是一个回调函数，根据调用接口的情况在适当的时候调用它来决定是否开始倒计时
                                // this.requestAPI(shouldStartCounting)
                            }}
                        />
                    </View>

                    <TextInput
                        placeholder='请输入验证码'
                        style={[styles.login_input]}
                        keyboardType='numeric'
                        maxLength={11}
                        value={this.state.vercode}
                        onChangeText={(text) => this.setState({vercode: text})}
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
                    onPress={this.loginOrReg}>
                    <Text style={[styles.unpress_login_btn_text]}>注册/登录</Text>
                </TouchableOpacity>

                <Text style={styles.login_xieyi}>注册即表示你已经阅读并同意《用户注册协议》</Text>

            </View>
        )
    }


    requestAPI(shouldStartCounting) {
        this.setState({
            state: '成功'
        });
    }


    loginOrReg = () => {

        const {phone} = this.props.navigation.state.params;
        const cur_phone = phone ? phone : '';


        const {loginIn} = this.props;

        let netParams = {
            "object": {
                "telephone": cur_phone,
                "vercode": this.state.vercode,
            }
        };

        console.log("telephone : " + phone + '---vercode : ' + this.state.vercode);

        loginIn(netParams);

    }
}

const mapStateToProps = (state) => ({
    status: state.loginIn.status,
    isSuccess: state.loginIn.isSuccess,
    object: state.loginIn.object,
});


const mapDispatchToProps = (dispatch) => ({
    loginIn: param => dispatch(loginAction.login(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSecondPage)

