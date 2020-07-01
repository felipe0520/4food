const initialState = '';

const Error = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ERROR_MSG":
      return (state = action.payload);
    default:
      return state;
  }
};

export default Error;
