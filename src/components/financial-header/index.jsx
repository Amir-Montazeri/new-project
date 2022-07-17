import { Grid } from "@mui/material";
import {
  containerStyles,
  itemsContainerStyles,
  searchContainerStyles,
} from "./financialHeaderStyles";
import SearchIcon from "assets/icons-dir/search.svg";
import HeaderItem from "./HeaderItem";

function FinancialHeader() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid item sx={searchContainerStyles}>
        <img src={SearchIcon} alt="search" />
      </Grid>
      <Grid item sx={itemsContainerStyles}>
        <HeaderItem title="لغو شده" count={2} bgcolor="#C8C8C8" />
        <HeaderItem title="مرجوع شده" count={1} bgcolor="#FF0000" />
        <HeaderItem title="فاکتورها" count={2} bgcolor="#00FF13" />
        <HeaderItem title="سفارشات" count={5} bgcolor="#009BE1" />
      </Grid>
    </Grid>
  );
}

export default FinancialHeader;
