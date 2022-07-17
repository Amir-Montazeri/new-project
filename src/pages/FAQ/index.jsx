import { Box } from "@mui/material";
import { FAQHeader, FAQItems } from "components";
import { containerStyles, contentStyles } from "./profileStyles";

function FAQ() {
  return (
    <Box sx={containerStyles}>
      <Box sx={contentStyles}>
        <FAQHeader />
        <FAQItems />
      </Box>
    </Box>
  );
}

export default FAQ;
