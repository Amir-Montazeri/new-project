import { base_api_url } from "api";
import axios from "axios";
import { deleteItem } from "lcoalStorage";
import {
  DELETE_PRODUCT_LIST,
  FETCH_ADBANNERS,
  IS_LOADING,
  LOG_OUT,
  SET_PRODUCTS,
  SET_USER_OK,
  USER,
} from "./actionTypes";

export const setIsLoading = (payload) => ({
  type: IS_LOADING,
  payload,
});

export const setUser = (payload) => ({
  type: USER,
  payload,
});

export const setUserOk = () => ({
  type: SET_USER_OK,
});

export const logOut = () => {
  deleteItem("access");
  deleteItem("refresh");

  return {
    type: LOG_OUT,
  };
};

export const deleteProductList = () => {
  return {
    type: DELETE_PRODUCT_LIST,
  };
};

export const fetchProducts = (queries) => async (dispatch) => {
  const { data } = await axios.get(
    `${base_api_url}/search/product/?${queries}`
  );

  dispatch({
    type: SET_PRODUCTS,
    payload: data,
  });
};

export const fetchAdBanners = () => async (dispatch) => {
  const { data } = await axios.get(`${base_api_url}/banners/`);

  console.log("banners", data);

  dispatch({
    type: FETCH_ADBANNERS,
    payload: data,
  });
};
