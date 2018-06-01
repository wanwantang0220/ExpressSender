import {deviceWidth} from "../util/ScreenUtil";
import {StyleSheet} from "react-native";
import {BlackColor, GrayColor, White} from "./BaseStyle";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    navigatorTitle:{
        fontSize:17,
        color:'white',
    },
    navigator:{
        backgroundColor:'#d81e06',
    },
    tabbarImage:{
        width:25,
        height:25,
        marginBottom:-3,
    },
    image_background:{
        width:deviceWidth,
        height:250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image_background_sender:{
        width:150,
        height:150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    home_image_sender:{
        width:50,
        height:50,
        marginBottom:5
    },
    home_image_sender_record:{
        flex:1,
        width:150,
        height:50,
        justifyContent: 'center',
        marginTop:10
    },
    home_tvsender:{
        marginTop:5
    },
    home_line:{
        width:50,
        height:1,
        marginTop:1,
        backgroundColor:BlackColor
    }
});
export default styles;