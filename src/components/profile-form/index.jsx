import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import Form from "./Form";
import FormFooter from "./FormFooter";

const ProfileForm = () => {
  const { register, handleSubmit } = useForm();

  const handleOnFormSubmit = (e) => {
    console.log(e);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleOnFormSubmit)}>
      <Form register={register} />
      <FormFooter />
    </Box>
  );
};

export default ProfileForm;
