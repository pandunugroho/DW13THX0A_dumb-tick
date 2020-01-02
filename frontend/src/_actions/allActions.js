import {GET_EVENT_DETAIL, GET_PROFILE} from "../config/constants"
import axios from "axios"

//harus return object, pure return object
//ada 2 key penting yg digunakan, key type dan payload
export const getEventDetail = (eventId) => {
    return {
        type: GET_EVENT_DETAIL,
        payload: axios(
            {
                method: "GET",
                url: `http://localhost:8080/event/${eventId}` /*backend medium*/
            }
        )
    }
};

export const getProfile = (profileId) => {
    return {
        type: GET_PROFILE,
        payload: axios(
            {
                method: "GET",
                url: `http://localhost:8080/profile/${profileId}` /*backend medium*/
            }
        )
    }
};