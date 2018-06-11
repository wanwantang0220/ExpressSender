import React,{PureComponent} from 'react';
import styles from "../style/Css";
import {Image, Text, TouchableHighlight, View} from "react-native";
import PropTypes from 'prop-types';

const PIC_EMPTY=require('../../img/add-none.png');

export default class AddressContent extends PureComponent{

    static propTypes={
        onAddAddress:PropTypes.func,
    };

    render(){
        const {onAddAddress} = this.props;
        return(
            <View >
                <Image
                    style={[styles.address_content_pic]}
                    source={PIC_EMPTY}
                    resizeMode={Image.resizeMode.contain}
                 />
                <Text style={[styles.address_content_text]}>您还没有添加过地址哦~</Text>
                <TouchableHighlight
                    style={[styles.address_content_button_view]}
                                    activeOpacity={0.7}
                                    underlayColor='#00000000'
                                    onHideUnderlay={()=>{}}
                                    onShowUnderlay={()=>{}}
                                    onPress={()=>this.props.onAddAddress()}>

                    <Text style={[styles.address_content_button]}>新增地址</Text>
                </TouchableHighlight>
            </View>
        )
    }
}