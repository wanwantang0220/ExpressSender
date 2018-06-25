/* --- 路由配置 ---
   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。
*/
import MainTab from "./MainTab";
import HomePage from "./page/HomePage";
import MinePage from "./page/MinePage";
import AddressListPage from "./page/AddressListPage";
import ExpressListPage from "./page/ExpressListPage";
import CouponListPage from "./page/CouponListPage";
import SettingPage from "./page/SettingPage";
import LoginPage from "./page/LoginPage";
import LoginSecondPage from "./page/LoginSecondPage";
import AddressAddPage from "./page/AddressAddPage";
import AddressEditPage from "./page/AddressEditPage";
import OrderDetailPage from "./page/OrderDetailPage";
import ReduxIndexPage from "./page/ReduxIndexPage";

const RouteConfig = {
    MainTab: {
        screen:MainTab,
    },
    // 下面三个页面我需要隐藏导航栏
    Home: {
        screen: HomePage,
        // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
    },
    Mine: {
        screen: MinePage,
        // navigationOptions: ({navigation}) => ({header:null, gesturesEnable:true})
    },
    AddressList:{
        screen:AddressListPage,
    },
    ExpressList:{
        screen:ExpressListPage,
    },
    CouponList:{
        screen:CouponListPage
    },
    Settings:{
        screen:SettingPage
    },
    Login:{
        screen:LoginPage,
        // navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})

    },
    LoginSecond:{
        screen:LoginSecondPage
    },
    AddressAdd:{
        screen:AddressAddPage
    },
    AddressEdit:{
        screen:AddressEditPage
    },
    OrderDetail:{
        screen:OrderDetailPage
    },
    ReduxIndex:{
        screen:ReduxIndexPage
    }
};

export default RouteConfig;
