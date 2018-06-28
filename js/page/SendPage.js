import React, {PureComponent} from 'react';
import {CheckBox, Image, Text, TouchableHighlight, View} from "react-native";

import styles from "../style/Css";
import {ColorLineRed, GrayColor} from "../style/BaseStyle";
import {deviceWidth} from "../util/ScreenUtil";

const MINE_ARROW = require("../../img/icon_arrow.png");
export default class SendPage extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    render() {

        const btnBg = this.state.checked ? styles.unpress_login_btn : styles.onpress_login_btn;

        return (
            <View style={[styles.container]}>

                <View>
                    <View
                        style={{width: deviceWidth, height: 45, flex: 2, flexDirection: 'row', backgroundColor: White}}>
                        <Text style={{flex: 1, fontSize: 14, color: ColorLineRed}}>寄</Text>
                        <View style={[styles.lineOne]}/>
                        <Text style={{flex: 5, fontSize: 14, color: GrayColor}}>寄件人信息</Text>
                        <Image style={[styles.mine_item_arrow]} source={MINE_ARROW}
                               resizeMode={Image.resizeMode.contain}/>
                    </View>

                    <View>
                        <Text style={{fontSize: 14, color: Dark_Primary_Color}}>收</Text>
                        <View style={[styles.lineOne]}/>
                        <Text style={{fontSize: 14, color: GrayColor}}>收件人信息</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>

                    <View>
                        <CheckBox
                            center
                            title='我愿意遵守'
                            checked={this.state.checked}/>
                        <Text>用户协议及隐私政策</Text>
                    </View>

                    <TouchableHighlight
                        style={[styles.btnBg]}
                        activeOpacity={0.7}
                        underlayColor='green'
                        onHideUnderlay={() => {
                        }}
                        onShowUnderlay={() => {
                        }}
                        onPress={() => {
                        }}>
                        <Text>立即下单</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

}