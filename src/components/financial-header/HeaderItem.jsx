import { Grid, Typography } from "@mui/material";
import {
  containerStyles,
  countContainerStyles,
  titleContainerStyles,
} from "./headerItemStyles";

function HeaderItem({ title, count, bgcolor }) {
  return (
    <Grid container flexWrap="nowrap" alignItems="center" sx={containerStyles}>
      <Grid item sx={{ bgcolor, ...countContainerStyles }}>
        {count}
      </Grid>
      <Grid item sx={titleContainerStyles}>
        <Typography variant="body1" component="p">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HeaderItem;
