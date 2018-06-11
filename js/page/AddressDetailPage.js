
import React,{PureComponent} from 'react';
import {View} from 'react-native';
import styles from "../style/Css";
import {White} from "../style/BaseStyle";

export default class AddressDetailPage extends  PureComponent{


    render(){
        return(
            <View style={[styles.mainContainer]}>

                <View style={{flexDirection:'column',flex:1}}>
                    <View style={{flex:1,flexDirection:'row'}}>

                        <Text>订单号:11111111111</Text>
                        <Text>待签收</Text>
                    </View>
                    <View style={{flex:3,backgroundColor:White}}>

                    </View>
                    <View style={{flex:15,backgroundColor:White}}>

                    </View>
                </View>
            </View>
        )
    }
}