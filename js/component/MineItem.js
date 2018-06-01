/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, Text, View} from "react-native";
import PropTypes from 'prop-types';
import styles from "../style/Css";

const MINE_EXPRESS = require("../../img/icon_express.png");
const MINE_ADDRESS = require("../../img/icon_place.png");
const MINE_CARD = require("../../img/icon_card.png");
const MINE_SETTING = require("../../img/icon_setting.png");
const MINE_ARROW = require("../../img/icon_arrow.png");

export default class MineItem extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            logo:''
        }
    }

    static propTypes={
        logo:PropTypes.number,
        style:PropTypes.string,
        content:PropTypes.string,
        onPress:PropTypes.func
    };

    componentDidMount() {
    }

    render() {

        const {logo,content,onPress }=this.props;
        return (
            <View style={[styles.mine_item]}>
                <View style={[styles.mine_item_left]}>
                    <Image style={[styles.mine_item_logo]} source={logo} resizeMode={Image.resizeMode.contain}/>
                    <Text style={[styles.mine_item_text]}>{content}</Text>
                </View>
                <Image style={[styles.mine_item_arrow]} source={MINE_ARROW} resizeMode={Image.resizeMode.contain}/>
            </View>
        )
    }

    getLogo() {
       const style = this.props.style;
       var logo;
       if(style==='express'){
           logo = MINE_EXPRESS;
       }else if(style==='address'){
           logo = MINE_ADDRESS;
       }else  if(style==='card'){
           logo = MINE_CARD;
       }else  if(style==='setting'){
           logo = MINE_SETTING;
       }

       this.setState({
           logo:logo
       })
    }
}

