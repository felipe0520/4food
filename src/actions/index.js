import axios from "axios";
import { BaseUrl } from "./BaseUrl";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const getRestaurants = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${BaseUrl}/restaurants`, {
      headers: {
        auth: token,
      },
    });
    dispatch(getRestaurantsToReducer(response.data.restaurants));
  } catch (error) {
    if (!token) {
      dispatch(push(routes.login));
    } else {
      alert("Não foi possível carregar lista de restuarantes!");
    }
  }
};

export const getRestaurantsToReducer = (restaurants) => ({
  type: "GET_RESTAURANTS",
  payload: restaurants,
});

export const setFilteredRestaurants = (restaurants) => ({
  type: "SET_FILTERED_RESTAURANTS",
  payload: restaurants,
});

export const setInputSearch = (inputData) => ({
  type: "SET_INPUT_SEARCH",
  payload: {
    inputData, // verificar necessidade de objeto
  },
});
