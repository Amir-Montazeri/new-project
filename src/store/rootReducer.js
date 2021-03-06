import { combineReducers } from "redux";
import isLoading from "./isLoading";
import user from "./user";
import products from "./products";
import adBanners from "./adBanners";
import mainPage from "./mainPage";

export default combineReducers({
  isLoading,
  products,
  adBanners,
  mainPage,
  user,
});
