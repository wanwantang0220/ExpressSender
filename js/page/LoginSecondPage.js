/**
 * 登录
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text, TextInput} from "react-native";
import styles from "../style/Css";
import {ColorLineRed, GrayColor, White} from "../style/BaseStyle";
import TimerButton from "../component/TimerButton";


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
            phone: '',
            state: '这里显示状态'
        }
        this.requestAPI = this.requestAPI.bind(this)
    }

    componentDidMount() {

    }

    render() {

        const { params } = this.props.navigation.state;
        const phone = params ? params.param : null;
        const btnBg = this.state.phone === "" ? BgUnOnPress : BgOnPress;

        return (
            <View style={[styles.mainContainer]}>

                <View style={[styles.login_view]}>
                    <Text style={[styles.login_text]}>喜来快递欢迎你</Text>
                    <View style={[styles.login_second_view,{flexDirection:'row'}]}>
                        <Text style={[styles.login_second_text]}>{phone}</Text>
                        <TimerButton
                            style={styles.login_second_time}
                            enable={phone.length}
                            textStyle={{color: 'blue'}}
                            timerCount={60}
                            timerTitle={'获取验证码'}
                            timerActiveTitle={['请在（','s）后重试']}
                            onClick={(shouldStartCounting)=>{
                                // shouldStartCountting是一个回调函数，根据调用接口的情况在适当的时候调用它来决定是否开始倒计时
                                //随机模拟发送验证码成功或失败
                                this.requestAPI(shouldStartCounting)
                            }}
/>
                    </View>

                    <TextInput
                        placeholder='请输入验证码'
                        style={[styles.login_input]}
                        keyboardType='numeric'
                        maxLength={11}
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({phone})}
                        underlineColorAndroid={ColorLineRed}/>
                </View>

                <View style={btnBg}>
                    <Text style={[styles.unpress_login_btn_text]}>注册/登录</Text>
                </View>

                <Text style={styles.login_xieyi}>注册即表示你已经阅读并同意《用户注册协议》</Text>

            </View>
        )
    }


    requestAPI(shouldStartCounting){
        this.setState({
            state: '正在请求验证码'
        })
        setTimeout(()=>{
            const requestSucc = 1;//Math.random() + 0.5 > 1
            this.setState({
                state: `（随机）模拟验证码获取${requestSucc ? '成功' : '失败'}`
            })
            shouldStartCounting && shouldStartCounting(requestSucc)
        }, 1000);
    }
}

