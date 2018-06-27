/**
 * 设置
 **/

import React, {PureComponent} from 'react';
import {Image, StyleSheet, View, Text, TouchableHighlight} from "react-native";
import styles from "../style/Css";
import HttpManager from "../data/http/HttpManager";
import RefreshState from "../component/refresh/RefreshState";
import ExpressItemCell from "../component/ExpressItemCell";
import RefreshListView from "../component/refresh/RefreshListView";

const SETTING_ARROW = require('../../img/icon_arrow.png');

export default class ExpressSignPage extends PureComponent {


    constructor(props) {
        super(props);

        this.state = {
            mData: [],
            startPage: 1,   // 从第几页开始加载
            pageSize: 6,   // 每页加载多少条数据
        };
        this.httpManager = new HttpManager();
    }

    componentDidMount() {

        this.listView.beginHeaderRefresh();
    }

    render() {


        return (
            <View style={[styles.container]}>

                <RefreshListView
                    ref={(ref) => {
                        this.listView = ref
                    }}
                    colors={['red', '#ffd500', '#0080ff', '#99e600']}
                    data={this.state.mData}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => {
                        return item._id || item.uuid;
                    }}
                    ListEmptyComponent={this.renderEmptyView}
                    onHeaderRefresh={() => {
                        this.requestRefreshData(true, false)
                    }}
                    onFooterRefresh={() => {
                        this.requestRefreshData(false, true)
                    }}>
                </RefreshListView>
            </View>
        )
    }


    /// 渲染一个空白页，当列表无数据的时候显示。这里简单写成一个View控件
    renderEmptyView = (item) => {
        return <View/>
    };

    renderItem = (item) => {
        const navigator = this.props.navigator;
        return (
            <ExpressItemCell address={item.item} navigator={navigator}/>
        )
    };


    /**
     *
     * @param isrefresh  刷新
     * @param isloadmore 加载更多
     */
    requestRefreshData(isrefresh, isloadmore) {
        if (isrefresh) {
            let startpage=1 , mdata=[];
            this.setState({
                mData: mdata,
                startPage: startpage
            });
            this.setState({title: 'React'});

            this.state.mData=[];
            this.state.startPage=1;
        }

        let params = {
            "orderStatus": "0",
        };
        let object = {
            "pageRow": this.state.pageSize,
            "startPage": this.state.startPage,
            "object": params
        };

        console.log("startPage", this.state.startPage);

        this.httpManager.getExpressCollect(object, (response) => {
            console.log("response", response);
            let mlist = [];
            for (let idx in response.list) {
                let item = response.list[idx];
                mlist.push(item)
            }
            // 获取总的条数
            let totalCount = response.totalRow;

            // 当前已经加载的条数
            let currentCount = this.state.mData.length;

            // 根据已经加载的条数和总条数的比较，判断是否还有下一页
            let footerState = RefreshState.Idle;
            let startPage = this.state.startPage;
            if (currentCount + mlist.length < totalCount) {
                // 还有数据可以加载
                footerState = RefreshState.CanLoadMore;
                // 下次加载从第几条数据开始
                startPage = startPage + 1;
            } else {
                footerState = RefreshState.NoMoreData;
            }
            // 更新movieList的值
            let mData = this.state.mData.concat(mlist);
            this.setState({
                mData: mData,
                startPage: startPage
            });
            this.listView.endRefreshing(footerState);

        });

    }
}

