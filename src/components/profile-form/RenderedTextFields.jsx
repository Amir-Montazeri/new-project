import { FormControl, Grid, InputLabel, OutlinedInput } from "@mui/material";
import { inputStyles } from "./renderedTextFieldsStyles";
import useWindowSize from "hooks/useWindowSize";

const RenderedTextFields = ({ textFieldItems, register }) => {
  const { innerWidth } = useWindowSize(),
    isXl = innerWidth >= 865;

  const renderedTextField = (items) =>
    items.map(({ name, placeholder, iconOnRight }) => {
      return (
        <Grid
          item
          key={name}
          name={name}
          flex={1}
          sx={{
            ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
              left: "unset !important",
              right: 0,
              transform: "translate(-50px, 16px)",
            },
          }}
        >
          <FormControl variant="outlined">
            <InputLabel htmlFor={name}>{placeholder}</InputLabel>
            <OutlinedInput
              id={name}
              name={name}
              endAdornment={<img src={iconOnRight} alt={name} height="20px" />}
              sx={inputStyles}
              label={placeholder}
              {...register(name)}
            />
          </FormControl>
        </Grid>
      );
    });

  return (
    <Grid container flexDirection={isXl ? "row" : "column"}>
      {renderedTextField(textFieldItems)}
    </Grid>
  );
};

export default RenderedTextFields;
