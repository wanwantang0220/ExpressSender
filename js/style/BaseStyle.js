import {StyleSheet} from 'react-native'


const GrayColor = '#9D9D9D';
const GrayBlackColor = '#666666';
const White = '#ffffff';
const Translucent = 'rgba(125,125,125,0.6)';
const MainBg = '#f5f5f5';
const GrayWhiteColor = '#f5f5f5';
const MikeWhiteColor = '#f0ffff';
const BlackTextColor = '#444444';
const BlackColor = '#000000';
const WhiteTextColor = '#ffffff';
const ThemeColor = '#268dcd';
const SeparatorColor = '#e0e0e0';
const BackgroundColor = '#F7F7F7';
const BackgroundColorLight = '#dddfe0';
const ColorTextGrey = '#989898';
const ColorRed = '#FF0000';
const ColorStart = '#F24A16';
const ColorEnd = '#BE0154';
const Dark_Primary_Color ='#0288D1';
const Default_Primary_Color ='#03A9F4';
const Light_Primary_Color ='#B3E5FC';
const Text_Primary_Color ='#FFFFFF';
const Accent_Color ='#448AFF';
const Primary_Text_Color ='#212121';
const Secondary_Text_Color ='#757575';
const Divider_Color ='#BDBDBD';
const Background ='#F5FCFF';
const ColorLine='#E5E5E5';






const BaseStyles = StyleSheet.create({
    baseWhiteText: {
        fontSize: 16,
        color: WhiteTextColor,
    },
    baseBlackText: {
        fontSize: 16,
        color: BlackTextColor,
    },
    baseIcon: {
        width: 26,
        height: 26,
    }
});

export {
    MainBg, GrayColor, GrayBlackColor, Translucent, White, BlackColor, GrayWhiteColor, MikeWhiteColor, BlackTextColor,
    WhiteTextColor, BaseStyles, ThemeColor, SeparatorColor, BackgroundColor, BackgroundColorLight, ColorTextGrey,
    ColorStart, ColorEnd, Dark_Primary_Color, Default_Primary_Color,Light_Primary_Color,Text_Primary_Color,
    Accent_Color,Primary_Text_Color,Secondary_Text_Color,Divider_Color,Background,ColorRed,ColorLine

}