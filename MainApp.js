
import React, {PureComponent} from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import MainAppReducer from "./js/reducer/MainAppReducer";
import {MainAppNavigator, mainMiddleware} from "./js/MainAppNavigator";


const store=createStore(MainAppReducer,applyMiddleware(mainMiddleware));

class MainApp extends PureComponent{

    render(){
        return(
            <Provider store={store}>

                <MainAppNavigator />

            </Provider>
        )
    }
}




export default MainApp;