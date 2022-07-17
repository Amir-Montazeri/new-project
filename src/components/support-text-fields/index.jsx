import { Grid, MenuItem, TextField } from "@mui/material";
import { items } from "./departmentItems";
import {
  containerStyles,
  textFieldsStyles,
  lastTextFieldStyles,
} from "./supportTextFieldsStyles";

function SupportTextFields({ register }) {
  return (
    <Grid item sx={containerStyles}>
      <TextField
        select
        label="دپارتمان"
        fullWidth
        required
        sx={textFieldsStyles}
        {...register("type")}
      >
        {items.map(({ title, value }) => (
          <MenuItem key={value} value={value}>
            {title}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        type="text"
        label="عنوان"
        fullWidth
        required
        variant="outlined"
        sx={textFieldsStyles}
        {...register("sub")}
      />
      <TextField
        type="text"
        label="توضیحات"
        multiline
        rows={5.9}
        required
        fullWidth
        sx={{ ...textFieldsStyles, lastTextFieldStyles }}
        {...register("content")}
      />
    </Grid>
  );
}

export default SupportTextFields;
