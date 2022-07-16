import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { imgContainer } from "./leftSectionStyles";

const LeftSection = () => {
  const [bgUrl, setBgUrl] = useState();

  useEffect(() => {
    setBgUrl("./assets/main-backgrounds/download-app-banner.svg");
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgUrl}) !important`,
          ...imgContainer,
        }}
      ></Box>
    </>
  );
};

export default LeftSection;
