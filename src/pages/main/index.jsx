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

const Main = () => {
  return (
    <div>
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
