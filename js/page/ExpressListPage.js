/**
 * 我的快递列表
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {BlackTextColor, White} from "../style/BaseStyle";
import AddressReceiverPage from "./AddressReceiverPage";
import AddressSenderPage from "./AddressSenderPage";
import styles from "../style/Css";
import ExpressSignPage from "./ExpressSignPage";
import ExpressCollectPage from "./ExpressCollectPage";


export default class ExpressListPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '我的快递',
        title:'我的快递'
    };


    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {

        const navigator = this.props.navigation;

        return (
            <View style={[styles.container]}>
                <ScrollableTabView
                    style={{marginTop:10}}
                    tabBarInactiveTextColor={BlackTextColor} // 没有被选中的文字颜色
                    tabBarActiveTextColor={BlackTextColor}       // 选中的文字颜色
                    tabBarBackgroundColor={White}     // 选项卡背景颜色
                    tabBarUnderlineStyle={{backgroundColor:'#FF0000',height:1}}   //下划线的样式
                    initialPage={0}
                    renderTabBar={() =>
                        <ScrollableTabBar
                            style={{height: 40,borderWidth:0,elevation:2}}
                            tabStyle={{height: 39}}
                            underlineHeight={2}/>}>

                    <ExpressCollectPage   tabLabel="    待揽收    " navigator={navigator}/>
                    <ExpressSignPage      tabLabel="    待签收    " navigator={navigator}/>
                </ScrollableTabView>

            </View>
        )
    }
}

