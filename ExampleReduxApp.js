
import React,{Component} from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import AppReducer from "./redux_example/reducers/AppReducer";
import {AppNavigator, middleware} from "./redux_example/navigators/AppNavigator";


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