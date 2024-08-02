import axios from "axios";
export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3001/user").then((res) => {
      dispatch({ type: GET_USER, payload: res.data[0] });
    });
  };
};

export const addUserLike = (data) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3001/user/${data.id}`, data)
      .then((res) => {
        dispatch({ type: ADD_USER_LIKE, payload: data });
      });
  };
};
