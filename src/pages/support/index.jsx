import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { SupportTextFields, SupportUploadImg } from "components";
import {
  buttonStyles,
  containerStyles,
  inputsContainerStyles,
} from "./supportStyles";

function Support() {
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = (e) => {
    console.log(e);
  };

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
