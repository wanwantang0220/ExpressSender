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
        fontSize:20,
        color:'#333333',
        flex: 1,
        textAlign: "center"
    },
    navigator:{
        backgroundColor:'#EEEEEE',
    },
    tabbarImage:{
        width:25,
        height:25,
        marginBottom:-3,
    },
    image_background:{
        flex:5,
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
        flex:4,
        width:150,
        height:100,
        justifyContent: 'center',
        marginStart:100
    },
    home_tvsender:{
        marginTop:5
    },
    home_line:{
        width:50,
        height:1,
        marginTop:1,
        backgroundColor:BlackColor
    },
    home_text:{
        flex:0.5,
        width:deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
    },
    mine_view_header:{
        flexDirection:'row',
        width:deviceWidth,
        height:70,
        backgroundColor:White,
        justifyContent: 'center',
    },
    mine_header:{
        flex:1,
        width:50,
        height:50,
        marginTop:10,
        marginLeft:20,
    },
    mine_header_text:{
        flex:3,
        fontSize:16,
        height:50,
        color:BlackColor,
        textAlign:'left',
        justifyContent:'center',
        alignItems:'center'
    },
    mine_header_text_right:{
        flex:1,
        fontSize:12,
        height:50,
        color:BlackColor,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    }

});
export default styles;