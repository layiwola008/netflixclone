export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

//LOGOUT ACTION
export const logout = () => ({
  type: "LOGOUT",
});

// Here we set up all action types we want to dispatch/triger
// to affect our data layer
