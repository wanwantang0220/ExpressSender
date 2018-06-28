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


const BgUnOnPress = styles.unpress_login_btn;
const BgOnPress = styles.onpress_login_btn;

export default class LoginSecondPage extends PureComponent {

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


    render() {

        const {params} = this.props.navigation.state;
        const phone = params ? params.param : null;
        const btnBg = this.state.vercode === "" ? BgUnOnPress : BgOnPress;

        return (
            <View style={[styles.mainContainer]}>

                <View style={[styles.login_view]}>
                    <Text style={[styles.login_text]}>喜来快递欢迎你</Text>
                    <View style={[styles.login_second_view, {flexDirection: 'row'}]}>
                        <Text style={[styles.login_second_text]}>{phone}</Text>
                        <TimerButton
                            style={styles.login_second_time}
                            enable={phone.length}
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

        const {params} = this.props.navigation.state;
        const phone = params ? params.param : null;

        let netParams = {
            "object": {
                "telephone": phone,
                "vercode": this.state.vercode,
            }
        };

        console.log("telephone : " + phone + '---vercode : ' + this.state.vercode);

        this.httpManager.loginOrReg(netParams, (response) => {
            if (response.errCode === RESULT_OK) {
                alert("验证成功");
                let authUser = response.object.authUser;
                let staffInfo = response.object.staffInfo;
                storage.save('userName', authUser.userName);
                storage.save('userId', authUser.userId);
                storage.save('staffInfo', staffInfo);
                //存储用户Token
                storage.save('cookie', 'SESSION=' + response.object.sessionId + ';SSOTOKEN=' + response.object.ssoToken);

                this.props.navigation.navigate('MainTab');
            } else {
                //TODO 异常处理
            }
        })
    }
}

