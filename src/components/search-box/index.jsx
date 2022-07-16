import { Grid, Box, Paper, InputBase, Button, IconButton } from "@mui/material";
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
import RenderedSelectItems from "./RenderedSelectItems";
import { LocationOnOutlined } from "@mui/icons-material";
import sampleSelectItems from "./sampleSelectItems.json";

const SearchBox = () => {
  return (
    <Box sx={containerStyles}>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        wrap="nowrap"
        sx={mainContainerStyles}
      >
        <Grid item component="form" sx={searchbarContainerStyles}>
          <Paper sx={inputContainerStyles}>
            <InputBase
              sx={inputStyles}
              placeholder="به دنبال چه..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Grid container sx={selectContainerStyles}>
              <Grid item>
                <RenderedSelectItems items={sampleSelectItems} />
              </Grid>
              <Grid item>
                <IconButton>
                  <LocationOnOutlined />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
          <Button sx={submitBtnStyles}>ادامه</Button>
        </Grid>
        <Grid item sx={logoContainer}>
          <img src="./assets/main-backgrounds/bike.png" alt="bike logo" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBox;
