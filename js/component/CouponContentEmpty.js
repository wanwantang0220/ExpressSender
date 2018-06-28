import React, {PureComponent} from 'react';
import {Image, Text, View} from "react-native";
import styles from "../style/Css";


const PIC_EMPTY = require('../../img/quan.png');
export default class CouponContentEmpty extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <View style={[styles.coupon_empty_view]}>

                <Image
                    style={{}}
                    source={PIC_EMPTY}
                    resizeMode={Image.resizeMode.contain}
                />
                <Text style={{fontSize: 12}}>您当前没有卡券哦~</Text>
            </View>
        )
    }
}