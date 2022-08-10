import axios from "axios";
import { base_api_url } from "api";
import { deleteItem, getItem } from "lcoalStorage";
import {
  DELETE_PRODUCT_LIST,
  FETCH_ADBANNERS,
  FETCH_MAINPAGE,
  FETCH_MY_PRODUCTS,
  IS_LOADING,
  LOG_OUT,
  SET_PRODUCTS,
  SET_USER_OK,
  USER,
} from "./actionTypes";

const accessToken = getItem("access");

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

export const fetchMainPage = () => async (dispatch) => {
  const { data } = await axios.get(`${base_api_url}/LoadPoster/`);

  dispatch({
    type: FETCH_MAINPAGE,
    payload: data,
  });
};

export const fetchMyProducts = () => async (dispatch) => {
  const { data } = await axios.get(`${base_api_url}/Product/?me=1`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  dispatch({
    type: FETCH_MY_PRODUCTS,
    payload: data,
  });
};
