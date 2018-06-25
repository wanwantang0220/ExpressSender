import React, {PureComponent} from 'react';
import {View} from 'react-native';


export default class ReduxIndexPage extends PureComponent {

    static navigationOptions ={
        title:'Redux',
        headerTitleStyle:{
            flex:1,
            textAlign:'center'
        },
        headerRight:<View/>
    }

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {

        return (
            <View>

            </View>
        )
    }
}