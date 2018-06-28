import {Nuknown_Error, NetWork_Request_Error, ErrorAnayle} from './ErrorAnayle'
import ErrorBean from "./ErrorBean";
import JsonUtil from "./JsonUtil";
import {
    ADDRESS_CREATE, ADDRESS_RETRIEVE_APP, ADDRESS_UPDATE, CREATE_VERIFICATION_CODE, LOGIN_REGISTER, MY_EXPRESS_LIST,
    RESULT_OK
} from "./ContastURL";


/*基础链接头*/
const BaseUrl = "http://smallapp-cs.xilaikd.com/xilaisender_s/";

export default class HttpManager {


    /***
     *  获取验证码
     * @param data
     * @param callback
     */
    getVeriCode(data, callback) {
        const url = BaseUrl + CREATE_VERIFICATION_CODE;
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JsonUtil.jsonToStr(data)
        };

        console.log("data", JsonUtil.jsonToStr(data));
        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseText) => {
                callback(responseText);
            }).done();
    }


    /***
     * 登录/注册
     * @param data
     * @param callback
     */
    loginOrReg(data, callback) {
        const url = BaseUrl + LOGIN_REGISTER;
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JsonUtil.jsonToStr(data)
        };

        console.log("data", JsonUtil.jsonToStr(data));
        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseText) => {
                callback(responseText);
            }).done();
    }


    /***
     * 我的快递-待揽收列表
     * @param data
     * @param callback
     */
    getExpressCollect(data, callback) {
        const url = BaseUrl + MY_EXPRESS_LIST;

        return new Promise((resolve, reject) => {
            this.postNetData(url, data)
                .then((data) => {
                    if (data != null) {
                        if (data.errCode === RESULT_OK) {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        } else {
                            reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                        }
                    } else {
                        reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                    }
                }).catch((error) => {
                if (error != null && error instanceof ErrorBean) {
                    reject(error)
                } else {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                }
            })
        })
    }


    /***
     * 新增地址
     * @param data
     * @param callback
     */
    addAddress(data, callback) {

        const url = BaseUrl + ADDRESS_CREATE;

        return new Promise((resolve, reject) => {
            this.postNetData(url, data)
                .then((data) => {
                    if (data != null) {
                        if (data.errCode === RESULT_OK) {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        } else {
                            reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                        }
                    } else {
                        reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                    }
                }).catch((error) => {
                if (error != null && error instanceof ErrorBean) {
                    reject(error)
                } else {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                }
            })
        })

    }


    /**
     * 地址列表
     * @param object
     * @param param2
     */
    requestAddresses(data, callback) {
        const url = BaseUrl + ADDRESS_RETRIEVE_APP;
        return new Promise((resolve, reject) => {
            this.postNetData(url, data)
                .then((data) => {
                    console.log("response address list ", data);
                    if (data != null) {
                        if (data.errCode === "000000") {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc));
                        } else {
                            reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                        }
                    } else {
                        reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                    }
                }).catch((error) => {
                if (error != null && error instanceof ErrorBean) {
                    reject(error)
                } else {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                }
            })
        })
    }

    /**
     * 编辑地址
     * @param data
     * @param callback
     */
    postEditAddress(data, callback) {
        const url = BaseUrl + ADDRESS_UPDATE;
        return new Promise((resolve, reject) => {
            this.postNetData(url, data)
                .then((data) => {
                    if (data != null) {
                        if (data.errCode === "000000") {
                            callback(data.object);
                        } else if (data.errDesc != null && data.errDesc != "") {
                            reject(ErrorAnayle.getErrorMsg(data.errDesc))
                        } else {
                            reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                        }
                    } else {
                        reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                    }
                }).catch((error) => {
                if (error != null && error instanceof ErrorBean) {
                    reject(error)
                } else {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                }
            })
        })
    }


    /*请求数据=本地加网络*/
    fetchNetData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.json())
                .then((responseData) => {
                    resolve(responseData);
                })
                .catch((error) => {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                })
                .done();
        })
    }

    /*请求数据=本地加网络*/
    postNetData(url, data) {
        //获取存储Token
        let cookie = storage.load({
            key: 'cookie'
        });

        let header = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JsonUtil.jsonToStr(data)
        };
        if (cookie.length) {
            header['Authorization'] = 'Bearer ' + cookie
        }

        return new Promise((resolve, reject) => {
            fetch(url, header)
                .then((response) => response.json())
                .then((responseData) => {
                    console.log("response.object", responseData);
                    resolve(responseData);
                })
                .catch((error) => {
                    reject(ErrorAnayle.getErrorBean(NetWork_Request_Error))
                })
                .done();
        })
    }
}


