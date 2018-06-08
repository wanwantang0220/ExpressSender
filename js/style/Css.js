import {deviceWidth} from "../util/ScreenUtil";
import {StyleSheet,PixelRatio} from "react-native";
import {BlackColor, ColorLine, ColorLineRed, Divider_Color, GrayColor, MainBg, ThemeColor, White} from "./BaseStyle";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: MainBg,
    },
    container:{
        flex: 1,
        flexDirection:'column',
        backgroundColor:MainBg
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
    },
    mine_header:{
        flex:1,
        width:50,
        height:50,
        marginTop:5,
        marginLeft:20,
    },
    mine_header_text:{
        flex:3,
        fontSize:16,
        height:50,
        color:BlackColor,
        textAlign:'left',
        marginTop:25,
        marginStart:15
    },
    mine_header_right:{
        flex:1,
        fontSize:16,
        height:50,
        color:BlackColor,
        marginTop:25,
        marginStart:15
    },
    mine_header_text_right:{
        flex:1,
        fontSize:12,
        height:50,
        color:BlackColor,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    mine_item:{
        width:deviceWidth,
        height:50,
        flexDirection:'row',
        alignItems: 'center',
    },
    mine_item_left:{
        flex:5,
        flexDirection:'row',
        marginStart:20
    },
    mine_item_logo:{
        width:20,
        height:20,
        paddingStart:20
    },
    mine_item_text:{
        textAlign:'left',
        fontSize:14,
        color:BlackColor,
        marginStart:10,
    },
    mine_item_arrow:{
        flex:1,
        width:20,
        height:20,
    },
    mine_item_text_right:{
        flex:1,
        textAlign:'right',
    },
    view_line_full:{
        backgroundColor:ColorLine,
        height:1,
        width:deviceWidth,
    },
    view_line:{
        height:1,
        width:deviceWidth-40,
        marginStart:20,
        marginEnd:20,
        backgroundColor:ColorLine,
    },
    lineargradient:{
        width:deviceWidth,
        height:10
    },
    mine_view_content:{
        width:deviceWidth,
        height:210,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems:'center'
    },
    setting_content:{
        width:deviceWidth,
        height:50,
        flexDirection:'row',
        backgroundColor:'#ffffff'
    },
    setting_left:{
        height:50,
        flex:4,
        justifyContent: 'center',
        textAlign:'left',
        textAlignVertical:'center',
        marginStart:20
    },
    setting_right:{
        height:50,
        flex:1,
        justifyContent: 'center',
        textAlign:'right',
        marginEnd:5,
        textAlignVertical:'center'
    },
    setting_right_arrow:{
        width:20,
        height:20,
        flex:0.5,
        justifyContent: 'center',
        marginTop:15
    },
    login_view:{
      width:deviceWidth,
      marginStart:20,
      marginEnd:20,
      marginTop:40,
      marginBottom:20
    },
    login_text:{
        width:170,
        fontSize:36,
        fontFamily: 'Verdana bold',
        fontWeight: 'bold',
        color:BlackColor
    },
    login_input:{
        width:deviceWidth-40,
        fontSize:14,
        marginRight:20,
        marginTop:30

    },
    login_second_view:{
        width:deviceWidth-40,
        marginRight:20,
        marginTop:30
    },
    unpress_login_btn:{
        width:deviceWidth-40,
        height:48,
        marginStart:20,
        marginEnd:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor: Divider_Color,
        borderColor: Divider_Color,
        justifyContent: 'center',
        borderRadius: 30,
        borderStyle: 'solid',
        alignItems:'center',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
    },
    onpress_login_btn:{
        width:deviceWidth-40,
        height:48,
        marginStart:20,
        marginEnd:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor: ColorLineRed,
        borderColor: ColorLineRed,
        borderWidth:0,
        justifyContent: 'center',
        borderRadius: 30,
        borderStyle: 'solid',
        alignItems:'center',
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
    },
    unpress_login_btn_text:{
        fontSize:14,
        color:White
    },
    login_xieyi:{
        fontSize:10,
        color:GrayColor,
        marginTop:20,
        justifyContent: 'center',
        textAlign:'center'
    },
    login_second_text:{
        fontSize:14,
        color:BlackColor,
        flex:1
    },
    login_second_time:{
        fontSize:14,
        color:GrayColor,
        flex:1,
        textAlign:'left'
    },
    address_item_view:{
        width:deviceWidth,
        height:30,
        marginStart:10,
        marginEnd:10,
        marginTop:10,
        flexDirection:'row'
    },
    address_item_text1:{
        flex:1,
        fontSize:14,
        color:BlackColor
    },
    address_item_text2:{
        flex:1,
        fontSize:14,
        color:BlackColor
    },
    address_item_text3:{
        fontSize:12,
        color:GrayColor
    },
    address_item_view2:{
        marginStart:10,
        marginEnd:10,
        marginBottom:10
    },
    item_line:{
        width:deviceWidth,
        height:10,
        backgroundColor:MainBg
    },
    address_item_view3:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        marginBottom:10,
        marginTop:10,
        marginEnd:10
    },
    address_item_view3_text: {
        width: 70,
        flexDirection: 'row'
    },
    address_content_pic:{
        justifyContent:'center',
        alignItems:'center'
    },
    address_content_text:{
        justifyContent:'center',
        alignItems:'center'
    },
    address_content_button_view:{
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:ColorLineRed,
        borderRadius:20
    },
    address_content_button:{
        fontSize:ColorLineRed,
        fontSize:14
    },
    coupon_empty_view:{
        alignItems:'center',
        marginTop:50
    },
    lineOne:{
        width:0,
        height:40,
        borderWidth:0.8,
        borderColor:'red',
        borderStyle:'dashed',
        borderRadius:0.1,
    }




});
export default styles;