import { deleteItem } from "lcoalStorage";
import { IS_LOADING, LOG_OUT, USER } from "./actionTypes";

export const setIsLoading = (payload) => ({
  type: IS_LOADING,
  payload,
});

export const setUser = (payload) => ({
  type: USER,
  payload,
});

export const logOut = () => {
  deleteItem("access");
  deleteItem("refresh");

  return {
    type: LOG_OUT,
  };
};
