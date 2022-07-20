import { Box, Divider, Grid, Typography } from "@mui/material";
import { iconData } from "./data";
import {
  dividerStyles,
  iconContainerStyles,
  infoContainerStyles,
  printContainerStyles,
  statusContainerStyles,
} from "./renderedFactorsStyles";
import printIcon from "assets/icons-dir/print.svg";

const FactorContainer = ({
  status,
  statusMsg,
  day,
  month,
  year,
  code,
  price,
}) => {
  return (
    <Box>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={statusContainerStyles}
      >
        <Grid item>
          <Typography variant="h6" component="p">
            {statusMsg}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ ...iconContainerStyles, bgcolor: iconData[status].clr }}
        >
          <img src={iconData[status].iconUrl} height="18px" alt={status} />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item sx={printContainerStyles}>
          <img src={printIcon} alt="print" height="25px" />
        </Grid>
        <Grid item sx={infoContainerStyles}>
          <Typography variant="h6" component="p">
            {day} {month} {year}
          </Typography>
          <Typography variant="h6" component="p">
            کد سفارش {code}
          </Typography>
          <Typography variant="h6" component="p">
            مبلغ {price} تومان
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={dividerStyles} />
    </Box>
  );
};

export default FactorContainer;
