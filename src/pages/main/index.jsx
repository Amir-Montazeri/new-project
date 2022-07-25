import { Container } from "@mui/material";
import FirstSallingItems from "components/first-salling-items";
import HomeDownloadApp from "components/home-download-app";
import ItemsTypes from "components/items-types";
import MainBanner from "components/main-banner";
import SearchBox from "components/search-box";
import SecondBanner from "components/second-banner";
import SecondSallingItems from "components/second-salling-items";
import SuggestedItems from "components/suggested-items";
import ThirdBanner from "components/third-banner";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* <Link to="/about">About</Link>
      <br />
      <Link to="/contact">contact</Link>
      <br />
      <Link to="/download">download</Link>
      <br />
      <Link to="/login">login</Link>
      <br />
      <Link to="/register">register</Link>
      <br />
      <Link to="/product">product</Link>
      <br />
      <Link to="/product/create">create</Link>
      <br />
      <Link to="/profile/me">me</Link>
      <br />
      <Link to="/profile/purchases">purchases</Link>
      <br />
      <Link to="/profile/financial">financial</Link>
      <br />
      <Link to="/profile/support">support</Link>
      <br />
      <Link to="/FAQ">FAQ</Link> */}
      <MainBanner />
      <SearchBox />
      <ItemsTypes />
      <SuggestedItems />
      <SecondBanner />
      <Container maxWidth="lg">
        <FirstSallingItems />
        <ThirdBanner />
        <SecondSallingItems />
      </Container>
      <HomeDownloadApp />
    </div>
  );
};

export default Main;
