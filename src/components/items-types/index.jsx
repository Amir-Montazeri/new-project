import { Box, Grid, Typography } from "@mui/material";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "store/actions";
import { containerStyles, titleStyles } from "./itemsTypesStyles";
import sampleItems from "./sampleItems.json";

const ItemsTypes = ({ fetchProducts }) => {
  const navigate = useNavigate();

  const handleItemClicked = (categoryName) => {
    fetchProducts(`search=${categoryName}`);
    navigate("/products");
  };

  const renderedSlides = (items) =>
    items.map((item) => (
      <Grid
        item
        key={item.id}
        sx={{
          marginTop: "18px",
          width: "130px",
          cursor: "pointer",
          "@media screen and (max-width: 610px)": {
            width: "90px",
          },
          "@media screen and (max-width: 490px)": {
            width: "70px",
          },
        }}
        onClick={() => handleItemClicked(item.categoryName)}
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
      <Typography
        variant="h5"
        component="h2"
        sx={titleStyles}
        className="sepahbod-font"
      >
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

export default connect(null, { fetchProducts })(ItemsTypes);
