import "./subCategories.scss";
import { Typography } from "@mui/material";

function RenderedSubCategories({
  subCategories,
  selectedSubCategory,
  setSelectedSubCategory,
  selectedColor,
}) {
  return subCategories.map((subCategory) => {
    return (
      <li
        key={subCategory.id}
        onClick={() => setSelectedSubCategory(subCategory.name)}
        className="subCategory-container"
        style={{
          backgroundColor:
            selectedSubCategory === subCategory.name && selectedColor,
        }}
      >
        <Typography variant="body1" component="p">
          {subCategory.name}
        </Typography>
      </li>
    );
  });
}

export default RenderedSubCategories;
