import * as types from "../constants/ActionType";


const initialState={
    status:"...",
    isSuccess: false,
    object: null,
};


export default function verCode(state = initialState ,action) {
    switch (action.type){
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                status:'loading',
                isSuccess: false,
                object: null,
            };
            break;
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                status: 'success',
                isSuccess: true,
                object: action.object,
            };
            break;
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                status: 'error',
                isSuccess: true,
                object: null,
            };
            break;
        default:
            console.log(state);
            return state;
    }

}
