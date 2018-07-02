/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight, TextInput, TouchableOpacity} from "react-native";
import styles from "../style/Css";
import {deviceWidth} from "../util/ScreenUtil";
import {BackgroundColorLight, BlackColor, ColorLineRed, GrayColor, GrayWhiteColor} from "../style/BaseStyle";
import HttpManager from "../data/http/HttpManager";
import {RESULT_OK} from "../data/http/ContastURL";
import {connect} from "react-redux";
import {NavigationActions} from "react-navigation";
import {storage} from '../data/storeage/Storage';

const SETTING_ARROW = require('../../img/icon_arrow.png');

class AddressAddPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '新增地址',
        title: '新增地址',
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };


    constructor(props) {
        super(props);

        this.state = {
            addressName: '',
            addressPhone: '',
            addressDetail: '',
            proviceCityRegionTxt: '',
            addrType: '1',
            longitude: '',
            latitude: '',
        }

        this.httpManager = new HttpManager();
    }

    componentDidMount() {

    }

    render() {


        return (
            <View style={[styles.container]}>

                <View style={{flex: 3, flexDirection: 'column', marginTop: 10, backgroundColor: '#ffffff'}}>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>姓名</Text>
                        <TextInput
                            style={[styles.add_address_textinput]}
                            placeholder='请输入姓名'
                            underlineColorAndroid='#00000000'
                            onChange={(text) => {
                                this.setState({addressName: text})
                            }}/>
                    </View>
                    <View style={[styles.view_line]}/>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>联系方式</Text>
                        <TextInput style={[styles.add_address_textinput]}
                                   placeholder='请输入联系方式'
                                   underlineColorAndroid='#00000000'
                                   onChange={(text) => {
                                       this.setState({addressPhone: text})
                                   }}/>
                    </View>
                    <View style={[styles.view_line]}/>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>所在区域</Text>
                        <Text style={[styles.add_address_textinput]}
                              placeholder='请选择区域'
                              underlineColorAndroid='#00000000'
                        />
                    </View>
                    <View style={[styles.view_line]}/>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>详细地址</Text>
                        <TextInput style={[styles.add_address_textinput]}
                                   placeholder='请填写详细地址'
                                   underlineColorAndroid='#00000000'
                                   onChange={(text) => {
                                       this.setState({addressDetail: text})
                                   }}/>
                    </View>
                    <View style={[styles.view_line]}/>
                    <View style={[styles.add_address_view1]}>
                        <Text style={[styles.add_address_text]}>地址类型</Text>
                        <TextInput style={[styles.add_address_textinput]}
                                   placeholder='ceshi '
                                   underlineColorAndroid='#00000000'/>
                    </View>
                </View>


                <View style={{flex: 2.5, marginTop: 10, backgroundColor: '#ffffff',}}>

                    <Text style={{
                        fontSize: 12, color: BlackColor,
                        marginStart: 10, marginTop: 5
                    }}>智能地址填写</Text>
                    <Text style={{
                        fontSize: 10,
                        color: GrayColor,
                        marginTop: 5,
                        marginStart: 10
                    }}>粘贴一整段地址，自动识别姓名、电话和地址</Text>
                    <TextInput
                        style={{
                            height: 100,
                            marginTop: 5,
                            marginStart: 10,
                            marginEnd: 10,
                            backgroundColor: GrayWhiteColor,
                            color: GrayColor,
                            paddingVertical: 0,
                            paddingLeft: 5,
                            fontSize: 13
                        }}
                        placeholder='例如：王小明，18911111111，上海市黄浦区新兴路xx号'
                        multiline
                        underlineColorAndroid={'transparent'}/>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row', marginEnd: 20}}>
                        <Text style={[styles.add_address_text_btn]}>清空</Text>
                        <Text style={[styles.add_address_text_btn2]}>智能录入</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{flex: 1, marginTop: 30}}
                    activeOpacity={0.7}
                    underlayColor='green'
                    onHideUnderlay={() => {
                    }}
                    onShowUnderlay={() => {
                    }}
                    onPress={this.saveAddress}>
                    <View style={[styles.onpress_login_btn]}>
                        <Text style={[styles.unpress_login_btn_text]}>保存</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }


    saveAddress = () => {

        const userName = storage.load('userName');
        const params = {
            "object": {
                "name": "测试数据1",//this.state.addressName,
                "phone": "18961722253",// this.state.addressPhone,
                "addrDetail": "菱湖大道",//this.state.addressDetail,
                "proviceCityRegionTxt": "江苏省-无锡市-新吴区",// this.state.proviceCityRegionTxt,
                "addrType": "1",//this.state.addrType,
                "longitude": "120.30 ",//this.state.longitude,
                "latitude": "31.57",//this.state.latitude,
                "addUserType": "1",
                "addUserName": "汤弯弯",
                "addUserPhone": "18961722253",//userName,
                "active": "1"
            }
        };


        this.httpManager.addAddress(params, (response) => {
                alert("地址添加成功");
                this.props.navigation.pop();
        })


    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddressAddPage)

