// The reducer modifies our data layer based on dispatched action
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        iseFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        iseFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        iseFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        iseFetching: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
