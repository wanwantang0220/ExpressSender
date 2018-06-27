/**
 * 我的订单
 **/

import React, {Component} from 'react';
import {Image, ImageBackground, StatusBar, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import styles from "../style/Css";
import NaviBarView from "../component/NaviBarView";
import * as NavigationActions from "react-navigation";

const BG = require("../../img/bc.png");
const BG_SENDER = require("../../img/group2.png");
const ICON_SENDER = require("../../img/sent.png");
const BG_SENDER_RECORD = require("../../img/font.png");

export default class HomePage extends Component {


    static navigationOptions = {
        //标题
        drawerLabel: '首页',
        title:'首页',
        headerTitle:"首页",
        headerTitleStyle: {
            flex: 1,
            textAlign: "center",
        },
        headerRight: <View/>
    };

    render() {

        return (
            <View style={styles.mainContainer}>
                <StatusBar
                    animated={true}
                    backgroundColor="black"
                    barStyle='light-content'/>
                <NaviBarView backgroundColor="black"/>



                    <View style={{flex:1}}>
                    <ImageBackground style={[styles.image_background]} source={BG} resizeMode={Image.resizeMode.stretch} >
                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            underlayColor='transparent'
                                            onHideUnderlay={()=>{}}
                                            onShowUnderlay={()=>{}}
                                            onPress={()=>{this.props.navigation.navigate('Login')}}>
                        <ImageBackground style={[styles.image_background_sender]} source={BG_SENDER}
                                         resizeMode={Image.resizeMode.contain}>
                            <Image style={[styles.home_image_sender]} source={ICON_SENDER}/>

                            <View style={[styles.home_line]}/>
                            <Text style={[styles.home_tvsender]}>发快递</Text>
                        </ImageBackground>
                        </TouchableOpacity>
                    </ImageBackground>

                            <ImageBackground style={[styles.home_image_sender_record]}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    underlayColor='transparent'
                                    onHideUnderlay={()=>{}}
                                    onShowUnderlay={()=>{}}
                                    onPress={()=> this.props.navigation.navigate('ExpressList')}>
                                    <Image style={[styles.home_image_express_bg]}
                                                     source={BG_SENDER_RECORD} resizeMode={Image.resizeMode.contain}>
                                    </Image>
                                </TouchableOpacity>
                            </ImageBackground>
                    <Text style={[styles.home_text]}>您还未实名认证,立即认证>>></Text>
                    </View>

            </View>
        )
    }



}

