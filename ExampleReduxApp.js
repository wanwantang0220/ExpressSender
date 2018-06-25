
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


export default ExampleReduxApp;