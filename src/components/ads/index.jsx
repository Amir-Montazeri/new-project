import { Box } from "@mui/material";

function Ads() {
  return (
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
    </Box>
  );
}

export default Ads;
