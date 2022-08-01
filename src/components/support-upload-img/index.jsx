import { useState, createRef } from "react";
import { Grid, Typography } from "@mui/material";
import DefaultImg from "./DefaultImg";
import {
  containerStyles,
  inputContainerStyles,
} from "./supportUploadImgStyles";
import uploadIcon from "assets/icons-dir/upload.svg";

function SupportUploadImg({ register }) {
  const [uploadedImg, setImg] = useState(null);
  const inputRef = createRef();
  const imgValue = uploadedImg
    ? {
        ...register("imgContent"),
      }
    : {};

  const handleImgChanged = (e) => {
    console.log(e.target.files);
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) return;

    const objectUrl = URL.createObjectURL(fileObj);
    setImg({ file: objectUrl, path: fileObj });
  };

  return (
    <Grid item sx={containerStyles} onClick={() => inputRef.current.click()}>
      {uploadedImg ? (
        <img
          src={uploadedImg?.file ?? uploadedImg.file}
          alt="your uploaded file"
          height="80%"
        />
      ) : (
        <DefaultImg />
      )}
      <Grid container justifyContent="space-between" sx={inputContainerStyles}>
        <Grid item>
          <input
            ref={inputRef}
            type="file"
            style={{ display: "none" }}
            {...imgValue}
            onChange={handleImgChanged}
            {...register("image_test")}
          />
          <img src={uploadIcon} alt="upload your file" />
        </Grid>
        <Grid item>
          <Typography variant="h6" component="p">
            بارگذاری تصویر
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SupportUploadImg;
