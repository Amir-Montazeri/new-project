import { useState } from "react";
import {
  Avatar,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import RenderedTextFields from "./RenderedTextFields";
import { textFields } from "./textFieldsData";
import { avatarStyles } from "./formStyles";
import useWindowSize from "hooks/useWindowSize";

const selectItems = [
  {
    title: "مشتری هستم",
    value: "C",
  },
  {
    title: "فروشنده هستم",
    value: "B",
  },
];

function Form({ register, setType, onProfileChanged }) {
  const [selectedValue, setSelectedValue] = useState(selectItems[0].value); //user_setType
  const { innerWidth } = useWindowSize(),
    isXl = innerWidth >= 865;

  const renderedTextFieldsContainer = (items) =>
    items.map(({ id, items }) => {
      return (
        <RenderedTextFields
          key={id}
          textFieldItems={items}
          register={register}
          onProfileChanged={onProfileChanged}
        />
      );
    });

  const renderedItems = (items) =>
    items.map(({ title, value }) => (
      <FormControlLabel
        key={value}
        value={value}
        control={<Radio onChange={(e) => setType(e.target.value)} />}
        label={title}
      />
    ));

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

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
      <Grid item>
        <RadioGroup
          row
          value={selectedValue}
          onChange={handleChange}
          sx={{
            direction: "rtl",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {renderedItems(selectItems)}
        </RadioGroup>
      </Grid>
    </Grid>
  );
}

export default Form;
