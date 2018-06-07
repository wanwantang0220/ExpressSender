/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from "react-native";
import AddressItemEditCell from "../component/AddressItemEditCell";
import styles from "../style/Css";


export default class AddressSenderPage extends PureComponent {

    static navigationOptions = {
        //标题
        drawerLabel: '设置',
    };


    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {

        return (
            <View style={[styles.mainContainer]}>
                <AddressItemEditCell />
            </View>
        )
    }
}

