import { Grid, Typography } from "@mui/material";
import {
  containerStyles,
  priceStyles,
  redTextStyle,
} from "./itemDramaticStyles";
import RenderedStars from "./RenderedStars";

const ItemDramatic = ({ bannerUrl, rate, title, desc, minPrice, maxPrice }) => (
  <Grid
    container
    flexDirection="column"
    justifyContent="space-evenly"
    sx={containerStyles}
  >
    <Grid item>
      <img src={bannerUrl} alt={`${title} banner`} width="38%" />
    </Grid>
    <Grid item>
      <RenderedStars currentStars={rate} />
    </Grid>
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
    {minPrice && maxPrice ? (
      <Grid item>
        <Typography variant="body2" component="p" sx={priceStyles}>
          {minPrice}{" "}
          <Typography variant="body2" component="span" sx={redTextStyle}>
            تومان
          </Typography>{" "}
          - {maxPrice}{" "}
          <Typography variant="body2" component="span" sx={redTextStyle}>
            تومان
          </Typography>
        </Typography>
      </Grid>
    ) : null}
  </Grid>
);

export default ItemDramatic;
