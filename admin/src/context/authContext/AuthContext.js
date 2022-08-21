import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

// This object prepares up the data layer where we will store of state info
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

// We create data our data layer with the reducer imported
export const AuthContext = createContext(INITIAL_STATE);

// This makes our data layer available and accessible
// when we import to our App.js and wrap our app with it
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user])

  // We define all objects/variables we want to access anywhere
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
