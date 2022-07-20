import logo from "./logo.svg";
import "./App.css";
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

function App() {
  return (
    <>
      <Ads />
      <Menu />
      {/* <GlobalStyles styles={{ "*": { fontFamily: "sepahbod !important" } }} /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<AdminTemplate />}> */}
        <Route path="product" element={<ListProduct />} />
        <Route path="product/create" element={<CreateProduct />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="me" element={<ProfileForm />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="financial" element={<Financial />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="FAQ" element={<FAQ />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
