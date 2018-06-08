import React,{PureComponent} from 'react';
import styles from "../style/Css";
import {Image} from "react-native";

const PIC_EMPTY=require('../../img/add-none.png');

export default class AddressContent extends PureComponent{

    render(){
        return(
            <View style={[styles.container]}>
                <Image
                    style={[styles.address_content_pic]}
                    source={PIC_EMPTY}/>
                <Text style={[styles.address_content_text]}>您还没有添加过地址哦~</Text>
                <View style={[styles.address_content_button_view]}>
                    <Text style={[styles.address_content_button]}>新增地址</Text>
                </View>
            </View>
        )
    }
}