import { Grid, Box, Paper, InputBase, Button } from "@mui/material";
import { connect } from "react-redux";
import {
  containerStyles,
  mainContainerStyles,
  searchbarContainerStyles,
  inputContainerStyles,
  submitBtnStyles,
  inputStyles,
  logoContainer,
  selectContainerStyles,
} from "./searchBox";
import { deleteProductList, fetchProducts } from "store/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ fetchProducts, deleteProductList }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      deleteProductList();
      fetchProducts(`search=${searchValue}`);
      navigate("/products");
    }
  };

  return (
    <Box sx={containerStyles}>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        wrap="nowrap"
        sx={mainContainerStyles}
      >
        <Grid
          item
          component="form"
          sx={searchbarContainerStyles}
          onSubmit={handleSubmit}
        >
          <Paper sx={inputContainerStyles}>
            <InputBase
              sx={inputStyles}
              placeholder="چی میتونم براتون پیدا کنم؟"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          <Button sx={submitBtnStyles} type="submit">
            ادامه
          </Button>
        </Grid>
        <Grid item sx={logoContainer} onClick={() => navigate("/product")}>
          <img src="./assets/main-backgrounds/bg-xl01.png" alt="bike logo" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default connect(null, { fetchProducts, deleteProductList })(SearchBox);
