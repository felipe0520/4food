const initialState = [{}];

const orderHistory = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_HISTORY":
      return (state = action.payload);
    default:
      return state;
  }
};

export default orderHistory;
