import {
  Grid,
  Box,
  Paper,
  InputBase,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
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
              placeholder="چی میتونم براتون پیدا کنم؟"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          <Button sx={submitBtnStyles}>ادامه</Button>
        </Grid>
        <Grid item sx={logoContainer}>
          <img src="./assets/main-backgrounds/bg-xl01.png" alt="bike logo" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBox;
