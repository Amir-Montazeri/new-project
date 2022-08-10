import { Routes, Route } from "react-router-dom";
import {
  AboutUs,
  Main,
  ContactUs,
  DownloadApp,
  Profile,
  Purchases,
  Financial,
  Support,
  FAQ,
  Tickets,
  MyProducts,
} from "pages";
import Login from "../src/pages/login/loginForm";
import Register from "../src/pages/register/registerForm";
import CreateProduct from "../src/pages/admin/product/create_product.page";
// import AdminTemplate from "./components/admin_template/admin_template.template";
import ListProduct from "./pages/admin/product/list_product.page";
import "./assets/Styles/global.style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "components/footer/footer.component";
import Menu from "components/menu/menu.component";
import ProfileForm from "components/profile-form";
import { GlobalStyles } from "@mui/material";
import { Ads, RenderIfLoggedIn } from "components";
import { connect } from "react-redux";
import { setIsLoading, fetchAdBanners, setUser } from "store/actions";
import BusinessForm from "components/business-form";
import { useEffect } from "react";

import axios from "axios";
import { base_api_url } from "api";
import { getItem, deleteItem } from "lcoalStorage";
import ProductComponent from "components/ProductComponent";

// function App({ user, setIsLoading, isLoading }) {
function App({ setUser, fetchAdBanners }) {
  // useEffect(() => {
  //   const accessToken = getItem("access");
  //   let atkCount = 10,
  //     didJob = 0;
  //   const intrvlID = setInterval(() => {
  //     didJob <= atkCount &&
  //       axios.get(`${base_api_url}/auth/info/`, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //     didJob++;
  //   }, 0);

  //   return () => clearInterval(intrvlID);
  // }, []);

  useEffect(() => {
    const accessToken = getItem("access");

    axios
      .get(`${base_api_url}/auth/info/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        if (res.statusText === "OK") {
          setUser(res.data);
        }
      })
      .catch((err) => {
        const { response } = err;
        // console.log("not succc::::::::::::", response);
        if (response.data.code === "token_not_valid") {
          deleteItem("access");
          deleteItem("refresh");
        }
      });
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const timerID = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 10000);
  //   clearTimeout(timerID);
  // }, []);

  useEffect(() => {
    fetchAdBanners();
  });

  return (
    <>
      <Ads />
      <Menu />
      <GlobalStyles
        styles={{
          a: { color: "#000", ":hover": { color: "#111" } },
          "*": {
            fontFamily: "Bahij !important",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route
          path="/login"
          element={
            <RenderIfLoggedIn mustLoggedIn={false}>
              <Login />
            </RenderIfLoggedIn>
          }
        />
        <Route
          path="/register"
          element={
            <RenderIfLoggedIn mustLoggedIn={false}>
              <Register />
            </RenderIfLoggedIn>
          }
        />
        {/* <Route path="/admin" element={<AdminTemplate />}> */}
        <Route path="products" element={<ListProduct />} />
        <Route path="product/create" element={<CreateProduct />} />
        <Route path="product/:id" element={<ProductComponent />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="me" element={<ProfileForm />} />
          <Route path="business" element={<BusinessForm />} />

          {/* mahsolate kharidari shode */}
          <Route path="purchases" element={<Purchases />} />

          {/* sefareshate moshtaria */}
          <Route path="financial" element={<Financial />} />
        </Route>
        <Route path="support" element={<Support />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="*" element={<div>Not Found</div>} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, {
  setIsLoading,
  fetchAdBanners,
  setUser,
})(App);
