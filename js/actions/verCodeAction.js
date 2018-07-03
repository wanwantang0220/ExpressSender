import * as types from "../constants/ActionType";
import {CREATE_VERIFICATION_CODE} from "../data/http/ContastURL";
import JsonUtil from "../data/http/JsonUtil";
import {BaseUrl} from "../data/HttpURL";
import {storage} from "../data/storeage/Storage";


export function verCode(params) {
    const url = BaseUrl + CREATE_VERIFICATION_CODE;
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JsonUtil.jsonToStr(params)
    };

    return dispatch => {
        dispatch(isLogining());
        let result = fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseText) => {
                if (responseText.errCode === "000000") {
                    dispatch(verCodeSuccess(true, responseText.object));
                } else {
                    dispatch(verCodeError(false));
                }
            }).catch(() => {
                dispatch(verCodeError(false));
            })
            .done();
    }
}


function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function verCodeSuccess(isSuccess, object) {
    console.log('success');
    return {
        type: types.LOGIN_IN_DONE,
        object: object,
    }
}

function verCodeError(isSuccess) {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR,
    }
}