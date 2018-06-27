import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from "react-native";


export default class TimerButton extends PureComponent{

    static propTypes={
        style:PropTypes.object,
        textStyle: Text.propTypes.style,
        onClick: PropTypes.func,
        disableColor: PropTypes.string,
        timerTitle: PropTypes.string,
        enable: PropTypes.oneOfType([PropTypes.bool,PropTypes.number]),
    };

    constructor(props){
        super(props);
        this.state={
            timerCount:this.props.timerCount || 30,
            timerTitle:this.props.timerTitle || '获取验证码',
            counting:false,
            selfEnable:true,
        };
        this.shouldStartCountting = this.shouldStartCountting.bind(this);
        this.countDownAction = this.countDownAction.bind(this);
    }

    componentDidMount() {
        this.shouldStartCountting.bind(true);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render(){

        const {onClick,style,textStyle,enable,disableColor} = this.props;
        const {counting,timerTitle,selfEnable}=this.state;

        return(
            <TouchableOpacity
                activeOpacity={counting ? 1 : 0.8}
                onPress={()=>{
                    if (!counting && enable && selfEnable) {
                        this.setState({selfEnable:false})
                        this.props.onClick(this.shouldStartCountting)
                    };
            }}>
                <View style={[style]}>
                    <Text style={[{fontSize: 14},textStyle,{color: ((!counting && enable && selfEnable) ? textStyle.color : disableColor || 'gray')}]}>{timerTitle}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    shouldStartCountting(shouldStart){
        if(this.state.counting){
            return;
        }
        if(shouldStart){
            this.countDownAction();
            this.setState({
                counting:true,
                selfEnable:false
            })
        }else{
            this.setState({selfEnable:true})
        }
    }

    countDownAction(){

        const codeTime = this.state.timerCount;
        this.interval = setInterval(()=>{
           const timer = this.state.timerCount-1;
            if(timer===0){
                this.interval&&clearInterval(this.interval);
                this.setState({
                    timerCount: codeTime,
                    timerTitle: this.props.timerTitle,
                    counting: false,
                    selfEnable: true
                })
            }else{
                console.log("---- timer ",timer);
                this.setState({
                    timerCount:timer,
                    timerTitle: `(${timer}s)`,
                })
            }
        },1000);
    }

}