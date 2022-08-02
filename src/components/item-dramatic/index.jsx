import { Grid, Typography } from "@mui/material";
import {
  bannerContainerStyles,
  containerStyles,
  priceStyles,
  redTextStyle,
} from "./itemDramaticStyles";
import RenderedStars from "./RenderedStars";

const ItemDramatic = ({ bannerUrl, rate, title, desc, minPrice }) => (
  <Grid
    container
    flexDirection="column"
    justifyContent="space-evenly"
    sx={containerStyles}
  >
    <Grid item sx={bannerContainerStyles}>
      <img src={bannerUrl} alt={`${title} banner`} width="60%" />
    </Grid>
    {rate ? (
      <Grid item>
        <RenderedStars currentStars={rate} />
      </Grid>
    ) : null}
    <Grid item>
      <Typography variant="h6" component="h4">
        {title}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="caption" component="p">
        {desc}
      </Typography>
    </Grid>
    {minPrice ? (
      <Grid item>
        <Typography variant="body2" component="p" sx={priceStyles}>
          {minPrice}{" "}
          <Typography variant="body2" component="span" sx={redTextStyle}>
            تومان
          </Typography>{" "}
        </Typography>
      </Grid>
    ) : null}
  </Grid>
);

export default ItemDramatic;
