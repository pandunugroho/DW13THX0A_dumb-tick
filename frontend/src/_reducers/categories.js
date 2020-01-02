import { GET_CATEGORIES } from "../config/constants"

//membuat global state
//pure function, gaada function

const initialState = {
    data: [],
    isLoading: false,
    error: false
}

//func yg punya 2 parameter initialState dan action 
export const categories = (state = initialState, action) => {
    //store akan kasih sinyal, action filter sinyal tersebut
    //ada 3 state yg harus dipenuhi, pending, fulfilled, dan rejected
    switch (action.type) {
        case `${GET_CATEGORIES}_PENDING`:
            return {
                ...state, //setiap ada pending akan ngambil seluruh objek state yg ada
                isLoading: true //state isLoading dipakai biar saat rendering, kita bisa ambil 
            };
        case `${GET_CATEGORIES}_FULFILLED`:
            console.log(action.payload);
            return {
                //mengisi array kosong 
                ...state,
                data: action.payload.data,
                isLoading: false
            };
        case `${GET_CATEGORIES}_REJECTED`:
            return {};
        default:
            return state;
    }
};

// export const todayEvents = (state = initialState, action) => {
//     //store akan kasih sinyal, action filter sinyal tersebut
//     //ada 3 state yg harus dipenuhi, pending, fulfilled, dan rejected
//     switch (action.type) {
//         case `${GET_TODAY_EVENTS}_PENDING`:
//             return {
//                 ...state, //setiap ada pending akan ngambil seluruh objek state yg ada
//                 isLoading: true //state isLoading dipakai biar saat rendering, kita bisa ambil 
//             };
//         case `${GET_TODAY_EVENTS}_FULFILLED`:
//             console.log(action.payload);
//             return {
//                 //mengisi array kosong 
//                 ...state,
//                 data: action.payload.data,
//                 isLoading: false
//             };
//         case `${GET_TODAY_EVENTS}_REJECTED`:
//             return {};
//         default:
//             return state;
//     }
// };