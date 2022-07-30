import "./categories.scss";
import { Typography } from "@mui/material";
import RenderedSubCategories from "./RenderedSubCategories";

function RenderedCategories({
  categories,
  selectedColors,
  selectedCategories,
  setSelectedCategories,
  selectedSubCategory,
  setSelectedSubCategory,
}) {
  return categories.map((category) => {
    const isSelected = selectedCategories === category.name;

    return (
      category.parrent_category === null && (
        <>
          <li
            key={category.id}
            onClick={() => setSelectedCategories(category.name)}
            style={{
              backgroundColor:
                isSelected && selectedColors.selected_parrent_cateogry,
            }}
            className={`category-container ${isSelected && "selected"}`}
          >
            <Typography variant="body1" component="p">
              {category.name}
            </Typography>
          </li>
          {isSelected && category.sub_category.length > 0 && (
            <ul style={{ direction: "rtl" }}>
              <RenderedSubCategories
                subCategories={category.sub_category}
                selectedSubCategory={selectedSubCategory}
                setSelectedSubCategory={setSelectedSubCategory}
                selectedColor={
                  selectedColors.selected_sub_cateogry || "rgb(0, 150, 223)"
                }
              />
            </ul>
          )}
        </>
      )
    );
  });
}

export default RenderedCategories;
