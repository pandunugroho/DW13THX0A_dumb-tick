import {GET_CATEGORIES, GET_TODAY_EVENTS} from "../config/constants"
import axios from "axios"

//harus return object, pure return object
//ada 2 key penting yg digunakan, key type dan payload
export const getCategories = () => {
    return {
        type: GET_CATEGORIES,
        payload: axios(
            {
                method: "GET",
                url: "http://localhost:8080/categories" /*backend medium*/
            }
        )
    }
};


/* atau
const getCategories = () => ({
    {
        type: GET_CATEGORIES,
        payload: axios(
            {
                method: "GET",
                url: "http://192.168.1.7:5000/api/v1/categories"
            }
        )
    }
})*/
