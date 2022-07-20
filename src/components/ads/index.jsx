import { Box } from "@mui/material";
import { useState } from "react";
import { ImCross } from "react-icons/im";

function Ads() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <Box
      sx={{
        cursor: "pointer",
        height: "100px",
        display: "flex",
        alignItems: "center",
        "*": { zIndex: 20 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 50,
          left: 0,
          width: "100vw",
          height: "100px",
          bgcolor: "red",
        }}
      ></Box>
      <Box
        sx={{ position: "absolute", top: 0, right: 0 }}
        onClick={() => setIsOpen(false)}
      >
        <ImCross />
      </Box>
    </Box>
  ) : null;
}

export default Ads;
