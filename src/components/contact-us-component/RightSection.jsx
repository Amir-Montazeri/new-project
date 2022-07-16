import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { imgContainer } from "./rightSectionStyles";

const RightSection = () => {
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    setBgUrl("./assets/main-backgrounds/location-map.svg");
  }, []);

  return (
    <>
      <Box
        sx={{
          background: `url(${bgUrl}) !important`,
          ...imgContainer,
        }}
      />
    </>
  );
};

export default RightSection;
