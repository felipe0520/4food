import axios from "axios";
import { BaseUrl } from "./BaseUrl";

export const getRestaurantDetail = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      auth: token,
    },
  };
  try {
    const response = await axios.get(`${BaseUrl}/restaurants/${id}`, headers);
    dispatch(getRestaurantDetailToReducer(response.data.restaurant));
  } catch (error) {
    console.error(error);
  }
};

export const getRestaurantDetailToReducer = (restaurantDetail) => ({
  type: "GET_RESTAURANT_DETAIL",
  payload: restaurantDetail,
});
