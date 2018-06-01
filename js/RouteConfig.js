/* --- 路由配置 ---
   * 所有组件都必须在这里注册
   * 在这里设置的navigationOptions的权限 > 对应页面里面的 static navigationOptions的设置 > StackNavigator()第二个参数里navigationOptions的设置
   * 该配置文件会在App.js里的StackNavigator(导航组件)里使用。
*/
import MainTab from "./MainTab";
import HomePage from "./page/HomePage";
import MinePage from "./page/MinePage";

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
};

export default RouteConfig;
