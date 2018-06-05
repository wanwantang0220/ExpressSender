import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HttpManager from "../data/http/HttpManager";
import styles from "../style/Css";

export default class AddressItemCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.httpManager = new HttpManager();

    }

    render() {
        let {address,navigator} = this.props;
        const addressdetail = address.proviceCityRegionTxt + address.addrDetail;
        return (
            <TouchableOpacity onPress={()=>{}}>
                <View style={styles.container}>
                    <View style={{}}>
                        <Text style={{}}>{address.name}</Text>
                        <Text style={{}}>{address.phone}</Text>
                    </View>
                    <Text style={{}}>{addressdetail}</Text>
                </View>
            </TouchableOpacity>
        )
    }





}
