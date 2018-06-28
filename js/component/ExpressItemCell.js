import React, {PureComponent} from 'react';
import {White} from "../style/BaseStyle";
import {Image, Text, View} from "react-native";


const PIC = require('../../img/icon_setting.png');
export default class ExpressItemCell extends PureComponent {

    render() {
        return (
            <View style={{marginTop: 10}}>

                <View style={{backgroundColor: White, flexDirection: 'row'}}>
                    <View>
                        <Text>订单号:</Text>
                        <Text>D1111111111</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text>无锡</Text>
                            <Text>测试</Text>
                        </View>
                        <View style={{flex: 2}}>
                            <Text>待揽收</Text>
                            <Image
                                style={{
                                    position: 'absolute',
                                    top: 200,
                                    left: 40,
                                    backgroundColor: 'green'
                                }}
                                source={PIC} resizeMode={Image.resizeMode.contain}/>
                        </View>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text>北京</Text>
                            <Text>测试</Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text>下单时间:</Text>
                        <Text>2018-06-01 16:58:58</Text>
                    </View>
                </View>
            </View>
        )
    }
}