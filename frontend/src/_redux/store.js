import { createStore, combineReducers, applyMiddleware } from "redux";
import { categories } from "../_reducers/categories";
import { todayEvents } from "../_reducers/todayEvent";
import { eventsByCategory } from "../_reducers/eventsByCategory";
import { eventDetail,profile } from "../_reducers/allReducers";
import { promise, logger } from "./middleware" ;

//get all reducers available
//global state come from here
const rootReducers = combineReducers({
    categories,
    todayEvents,
    eventsByCategory,
    eventDetail,
    profile
});

//Setup Store Redux
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;