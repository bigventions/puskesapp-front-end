export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const login = (form) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await fetch(
      "https://00b9-2404-8000-1095-657-d59f-dbce-5f6e-af38.ngrok-free.app/auth/postLogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      },
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }
    const data = await response.json();
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  dispatch({ type: LOGOUT });
};
