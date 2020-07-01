const initialState = {};

const SaveDetailInState = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANT_DETAIL":
      return (state = action.payload);
    default:
      return state;
  }
};

export default SaveDetailInState;
