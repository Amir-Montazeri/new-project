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
import { Ads } from "components";
import { connect } from "react-redux";
import { setIsLoading, fetchAdBanners } from "store/actions";
import BusinessForm from "components/business-form";
import { useEffect } from "react";

import Product from "pages/product";

// function App({ user, setIsLoading, isLoading }) {
function App({ fetchAdBanners }) {
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<AdminTemplate />}> */}
        <Route path="products" element={<ListProduct />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="product/create" element={<CreateProduct />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="me" element={<ProfileForm />} />
          <Route path="business" element={<BusinessForm />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="financial" element={<Financial />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="/FAQ" element={<FAQ />} />
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

export default connect(mapStateToProps, { setIsLoading, fetchAdBanners })(App);
