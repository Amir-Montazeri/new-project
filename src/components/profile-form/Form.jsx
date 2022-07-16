import { Avatar, Grid } from "@mui/material";
import RenderedTextFields from "./RenderedTextFields";
import { textFields } from "./textFieldsData";
import { avatarStyles } from "./formStyles";
import useWindowSize from "hooks/useWindowSize";

function Form({ register }) {
  const { innerWidth } = useWindowSize(),
    isXl = innerWidth >= 865;

  const renderedTextFieldsContainer = (items) =>
    items.map(({ id, items }) => {
      return (
        <RenderedTextFields
          key={id}
          textFieldItems={items}
          register={register}
        />
      );
    });

  return (
    <Grid
      container
      flexDirection={isXl ? "row" : "column"}
      alignItems={!isXl && "center"}
    >
      <Grid item>
        <Avatar variant={isXl ? "square" : ""} sx={avatarStyles} />
      </Grid>
      <Grid item>{renderedTextFieldsContainer(textFields)}</Grid>
    </Grid>
  );
}

export default Form;
// 865
