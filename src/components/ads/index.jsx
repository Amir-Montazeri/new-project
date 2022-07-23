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
          width: "100vw",
          height: "100px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://file.soft98.ir/afrak6.az"
          className="ad-banner"
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
        <ImCross color="#fff" style={{ filter: "drop-shadow(0 0 9px #000)" }} />
      </Box>
    </Box>
  ) : null;
}

export default Ads;
