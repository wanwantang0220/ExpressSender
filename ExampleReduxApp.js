
import React,{Component} from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import AppReducer from "./redux_example/reducers/AppReducer";
import {AppNavigator, middleware} from "./redux_example/navigators/AppNavigator";

/***
 * applyMiddleware(...middleware)
 * 使用包含自定义功能的 middleware 来扩展 Redux 是一种推荐的方式
 * Middleware 可以让你包装 store 的 dispatch 方法来达到你想要的目的。
 * 同时， middleware 还拥有“可组合”这一关键特性。多个 middleware 可以被组合到一起使用，形成 middleware 链。
 * 其中，每个 middleware 都不需要关心链中它前后的 middleware 的任何信息
 * @type {Store<any & any, Action> & {dispatch: any}}
 */
const store= createStore(AppReducer,applyMiddleware(middleware));

class ExampleReduxApp extends  Component{


    render(){

        return(
            <Provider store={store}>

                <AppNavigator />
            </Provider>
        )
    }
}

/***
 * 分析:
 * Provider提供的是一个顶层容器的作用，实现store的上下文传递
 * Connect组件是局部组件，将某个react组件包装起来，传递指定的state和props给该组件访问。
 */


export default ExampleReduxApp;