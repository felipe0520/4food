const initialState = {};

const activeorders = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ORDERS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default activeorders;
