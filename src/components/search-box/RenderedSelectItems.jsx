import { useState } from "react";
import { MenuItem, Select } from "@mui/material";

const RenderedSelectItems = ({ items }) => {
  const [selectedValue, setSelectedValue] = useState(items[0].value);

  const handleSelectedChanged = (value) => setSelectedValue(value.target.value);

  const renderedItems = items.map(({ title, value }) => {
    return (
      <MenuItem value={value} key={value}>
        {title}
      </MenuItem>
    );
  });
  return (
    <Select
      labelId="select-city"
      value={selectedValue}
      onChange={handleSelectedChanged}
    >
      {renderedItems}
    </Select>
  );
};

export default RenderedSelectItems;
