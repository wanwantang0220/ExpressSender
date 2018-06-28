import React, {Component} from "react";
import {Text, View} from "react-native";
import PropTypes from 'prop-types';

export default class Counter extends Component {

    static propTypes = {
        disableColor: PropTypes.string,
        timerTitle: PropTypes.string,
        enable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
    };

    constructor(props) {
        super(props);
        this.state = {
            timerCount: this.props.timerCount || 60,
            counting: false,
            selfEnable: true,
        };
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <Text disabled={this.state.timer !== -1}>
                {this.state.timer === -1 ? "发送" : this.state.timer + "秒"}
            </Text>
        )
    }
}