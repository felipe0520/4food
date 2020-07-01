export const saveProducts = (newsProducts) => (dispatch) => {
  dispatch(saveProductsToReducer(newsProducts));
};

export const saveProductsToReducer = (newsProducts) => ({
  type: "SAVE_PRODUCTS",
  payload: newsProducts,
});

export const removeProdutcs = (id) => (dispatch) => {
  dispatch(removeProductsToReducer(id));
};

export const removeProductsToReducer = (id) => ({
  type: "REMOVE_PRODUCTS",
  payload: id,
});
