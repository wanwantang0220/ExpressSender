/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight} from "react-native";
import styles from "../style/Css";

const SETTING_ARROW = require('../../img/icon_arrow.png');

export default class ExpressSignPage extends PureComponent {


    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {


        return (
            <View style={[styles.container]}>
                <Text>待签收</Text>
            </View>
        )
    }
}
