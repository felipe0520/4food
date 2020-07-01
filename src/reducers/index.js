import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurants from "./restaurants";
import SaveDetailInState from "./RestaurantDetailReducer";
import Error from "./error";
import orderHistory from "./orderHistory";
import filterSearch from "./filter";
import activeorders from "./activeorders";
import saveAndRemoveProducts from "./saveAndRemoveProducts";

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    restaurants,
    SaveDetailInState,
    Error,
    orderHistory,
    filterSearch,
    activeorders,
    saveAndRemoveProducts,
  });
