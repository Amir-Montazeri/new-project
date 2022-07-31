import { combineReducers } from "redux";
import isLoading from "./isLoading";
import user from "./user";
import products from "./products";
import adBanners from "./adBanners";

export default combineReducers({
  isLoading,
  products,
  adBanners,
  user,
});
