import React, {PureComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HttpManager from "../data/http/HttpManager";
import styles from "../style/Css";
import Icon from 'react-native-vector-icons/FontAwesome';

const EDIT_ICON = require('../../img/icon_edit.png');
const DELETE_ICON = require('../../img/icon_delete.png');

export default class AddressItemEditCell extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <TouchableOpacity onPress={() => {
            }}>
                <View style={{backgroundColor: '#ffffff'}}>
                    <View style={[styles.address_item_view]}>
                        <Text style={[styles.address_item_text1]}>测试</Text>
                        <Text style={[styles.address_item_text2]}>11111111111</Text>
                    </View>
                    <View style={[styles.address_item_view2]}>
                        <Text style={[styles.address_item_text3]}>江苏省无锡市滨湖区菱湖大道200号国家软件园E座7楼</Text>
                    </View>

                    <View style={[styles.view_line_full]}/>
                    <View style={[styles.address_item_view3]}>
                        <View style={[styles.address_item_view3_text]}>
                            <Icon name="edit" size={20} color="#757575"/>
                            <Text style={{marginStart: 5}}>编辑</Text>
                        </View>
                        <View style={[styles.address_item_view3_text]}>
                            <Icon name="trash" size={20} color="#757575"/>
                            <Text style={{marginStart: 5}}>删除</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}