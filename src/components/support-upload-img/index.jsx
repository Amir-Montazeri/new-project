import { useState, createRef } from "react";
import { Grid, Typography } from "@mui/material";
import DefaultImg from "./DefaultImg";
import {
  containerStyles,
  inputContainerStyles,
} from "./supportUploadImgStyles";
import uploadIcon from "assets/icons-dir/upload.svg";

function SupportUploadImg({ ticketImage, setTicketImage }) {
  // const [uploadedImg, setImg] = useState(null);
  const inputRef = createRef();
  // const imgValue = uploadedImg
  //   ? {
  //       ...register("imgContent"),
  //     }
  //   : {};

  console.log({ ticketImage });

  return (
    <Grid item sx={containerStyles} onClick={() => inputRef.current.click()}>
      {/* {ticketImage ? (
        <img
          src={ticketImage?.file ?? ticketImage.file}
          alt="your uploaded file"
          height="80%"
        />
      ) : (
        <DefaultImg />
      )} */}
      <DefaultImg />
      <Grid container justifyContent="space-between" sx={inputContainerStyles}>
        <Grid item>
          <input
            ref={inputRef}
            type="file"
            style={{ display: "none" }}
            // value={ticketImage}
            onChange={(e) => setTicketImage(e.target.files[0])}
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
