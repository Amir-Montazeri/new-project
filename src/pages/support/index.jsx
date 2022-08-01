import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { SupportTextFields, SupportUploadImg } from "components";
import {
  buttonStyles,
  containerStyles,
  inputsContainerStyles,
} from "./supportStyles";
import { getItem } from "lcoalStorage";
import axios from "axios";
import { base_api_url } from "api";

function Support() {
  const { register, handleSubmit } = useForm();
  const [errs, setErrs] = useState();

  const handleSubmitForm = (e) => {
    let formData = new FormData();
    const accessToken = getItem("access");

    Object.keys(e).map((resultKey) => {
      formData.append(resultKey, e[resultKey] || "");
    });

    axios
      .post(`${base_api_url}/BusinessInfo/`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log("suc ", res);
      })
      .catch((err) => {
        setErrs(err.response.data);
      });
  };

  console.log(errs);

  return (
    <Box
      onSubmit={handleSubmit(handleSubmitForm)}
      component="form"
      sx={containerStyles}
    >
      <Grid
        container
        flexWrap="nowrap"
        justifyContent="space-between"
        sx={inputsContainerStyles}
      >
        <SupportUploadImg register={register} />
        <SupportTextFields register={register} />
      </Grid>
      <Button type="submit" sx={buttonStyles}>
        ارسال تیکت
      </Button>
    </Box>
  );
}

export default Support;
