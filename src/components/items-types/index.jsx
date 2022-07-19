import { Box, Grid, Typography } from "@mui/material";
import { containerStyles, titleStyles } from "./itemsTypesStyles";
import sampleItems from "./sampleItems.json";

const ItemsTypes = () => {
  const renderedSlides = (items) =>
    items.map((item) => (
      <Grid
        item
        key={item.id}
        sx={{
          // height: "93px",
          width: "110px",
          cursor: "pointer",
        }}
      >
        <img
          src={item.iconUrl}
          alt={`${item.title} slide`}
          width="100%"
          style={{ background: `url(${item.iconUrl})` }}
        />
      </Grid>
    ));

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" component="h2" sx={titleStyles}>
        گروه محصول خود را انتخاب کنید
      </Typography>
      <Grid
        container
        flexWrap="nowrap"
        sx={{
          "@media screen and (max-width: 1010px)": { flexDirection: "column" },
        }}
      >
        {sampleItems.map(({ items, id }) => (
          <Grid
            container
            alignItems="center"
            justifyContent="space-evenly"
            key={id}
          >
            {renderedSlides(items)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsTypes;
