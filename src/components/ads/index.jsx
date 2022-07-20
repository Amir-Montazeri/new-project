import { Box } from "@mui/material";
import { useState } from "react";
import { ImCross } from "react-icons/im";

function Ads() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <Box
      sx={{
        position: "relative",
        height: "100px",
        cursor: "pointer",
        "*": { zIndex: 20 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100vw",
          height: "100px",
          bgcolor: "red",
          overflow: "hidden",
        }}
      >
        <img
          src="./assets/main-backgrounds/aboutus-banner.jpg"
          width="100%"
          alt="ads banner"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
        onClick={() => setIsOpen(false)}
      >
        <ImCross />
      </Box>
    </Box>
  ) : null;
}

export default Ads;
