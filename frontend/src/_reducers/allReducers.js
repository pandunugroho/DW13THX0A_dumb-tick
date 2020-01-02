import { GET_EVENT_DETAIL, GET_PROFILE } from "../config/constants"

//membuat global state
//pure function, gaada function

const initialState = {
    data: [],
    isLoading: false,
    error: false
}

//func yg punya 2 parameter initialState dan action 
export const eventDetail = (state = initialState, action) => {
    //store akan kasih sinyal, action filter sinyal tersebut
    //ada 3 state yg harus dipenuhi, pending, fulfilled, dan rejected
    switch (action.type) {
        case `${GET_EVENT_DETAIL}_PENDING`:
            return {
                ...state, //setiap ada pending akan ngambil seluruh objek state yg ada
                isLoading: true //state isLoading dipakai biar saat rendering, kita bisa ambil 
            };
        case `${GET_EVENT_DETAIL}_FULFILLED`:
            console.log(action.payload);
            return {
                //mengisi array kosong 
                ...state,
                data: action.payload.data,
                isLoading: false
            };
        case `${GET_EVENT_DETAIL}_REJECTED`:
            return {};
        default:
            return state;
    }
};


//func yg punya 2 parameter initialState dan action 
export const profile = (state = initialState, action) => {
    //store akan kasih sinyal, action filter sinyal tersebut
    //ada 3 state yg harus dipenuhi, pending, fulfilled, dan rejected
    switch (action.type) {
        case `${GET_PROFILE}_PENDING`:
            return {
                ...state, //setiap ada pending akan ngambil seluruh objek state yg ada
                isLoading: true //state isLoading dipakai biar saat rendering, kita bisa ambil 
            };
        case `${GET_PROFILE}_FULFILLED`:
            console.log(action.payload);
            return {
                //mengisi array kosong 
                ...state,
                data: action.payload.data,
                isLoading: false
            };
        case `${GET_PROFILE}_REJECTED`:
            return {};
        default:
            return state;
    }
};