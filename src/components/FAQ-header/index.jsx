import { Box, TextField, Typography } from "@mui/material";
import {
  containerStyles,
  descStyles,
  iconContainerStyles,
  TextFieldStyles,
  textStyles,
  titleStyles,
} from "./FAQHeaderStyles";
import qIcon from "assets/icons-dir/question.svg";

function FAQHeader() {
  return (
    <Box sx={containerStyles}>
      <Box sx={iconContainerStyles}>
        <img src={qIcon} alt="ask question" height="30px" />
      </Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{ ...textStyles, ...titleStyles }}
      >
        موضوع پرسش شما چیست؟{" "}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="#969696"
        sx={{ ...textStyles, ...descStyles }}
      >
        موضوع موردنظرتان را جستجو کرده یا از دسته‌بندی زیر انتخاب کنید
      </Typography>
      <TextField
        fullWidth
        sx={TextFieldStyles}
        type="text"
        label="‌جست‌وجو کنید"
        variant="outlined"
      />
    </Box>
  );
}

export default FAQHeader;
