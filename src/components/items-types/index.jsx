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
          width: "110px",
          cursor: "pointer",
          "@media screen and (max-width: 610px)": {
            width: "90px",
          },
          "@media screen and (max-width: 490px)": {
            width: "70px",
          },
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
        flexDirection="column"
        // sx={{
        //   "@media screen and (max-width: 1010px)": { flexDirection: "column" },
        // }}
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
