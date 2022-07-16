import { Grid, Button, Typography } from "@mui/material";
import { containerStyles, dirRtl, buttonStyles } from "./homeRenderedBoxes";

const HomeRenderedBoxes = ({ items, primaryContainerClass }) =>
  items.map(({ header, title, desc, bgclr, clr, titleClr, descClr, link }) => {
    return (
      <Grid
        item
        sx={{ ...containerStyles, ...dirRtl, ...primaryContainerClass }}
      >
        {header}
        <Typography
          variant="body1"
          component="h1"
          color={`${titleClr} !important` || "#734926"}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          color={`${descClr} !important` || "#000"}
        >
          {desc}
        </Typography>
        <Button
          sx={{
            ...buttonStyles,
            background: `${bgclr} !important`,
            color: `${clr} !important`,
          }}
        >
          بیشتر بدانید
        </Button>
      </Grid>
    );
  });

export default HomeRenderedBoxes;
