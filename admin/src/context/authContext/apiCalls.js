import { axiosInstance } from "../../config";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

// We define our Login Api call functions here and
// export it to our Login component. It makes call
// to our Login Api endpoint

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
    // The above condition makes sure that only admin users can 
    // login to dashboard
  } catch (err) {
    dispatch(loginFailure());
  }
};
