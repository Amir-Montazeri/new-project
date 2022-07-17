import { Box } from "@mui/material";
import { FinancialBody, FinancialHeader } from "components";
import { containerStyles } from "./financialStyles";

function Financial() {
  return (
    <Box sx={containerStyles}>
      <FinancialHeader />
      <FinancialBody />
    </Box>
  );
}

export default Financial;
