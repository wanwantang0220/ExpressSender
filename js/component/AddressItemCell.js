import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HttpManager from "../data/http/HttpManager";
import styles from "../style/Css";
import {deviceWidth} from "../util/ScreenUtil";

export default class AddressItemCell extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.httpManager = new HttpManager();

    }

    render() {
        // let {address,navigator} = this.props;
        // const addressdetail = address.provicessCityRegionTxt + address.addrDetail;
        return (
            <TouchableOpacity onPress={()=>{}}>
                <View style={{backgroundColor:'#ffffff'}}>
                    <View style={[styles.address_item_view]}>
                        <Text style={[styles.address_item_text1]}>测试</Text>
                        <Text style={[styles.address_item_text2]}>11111111111</Text>
                    </View>
                    <View style={[styles.address_item_view2]}>
                        <Text style={[styles.address_item_text3]}>江苏省无锡市滨湖区菱湖大道200号国家软件园E座7楼</Text>
                    </View>

                    <View style={[styles.item_line]}/>
                    <View style={[styles.view_line_full]}/>
                </View>
            </TouchableOpacity>
        )
    }





}
