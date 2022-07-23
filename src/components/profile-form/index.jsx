import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./Form";
import FormFooter from "./FormFooter";

const ProfileForm = () => {
  const [extraFormDatas, setExtraFormDatas] = useState({});
  const { register, handleSubmit } = useForm();

  const handleOnFormSubmit = (e) => {
    const result = { ...e, ...extraFormDatas, profile_user_id: 3 };
    console.log("resu: ", result);
    axios
      .post("http://193.141.64.166:8088/Profile/", {
        ...result,
      })
      .then((res) => {
        console.log("suc ", res);
      })
      .catch((err) => {
        console.log("err: ", err.response.data);
        console.log("err: ", err.response.data);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleOnFormSubmit)}>
      <Form
        register={register}
        setType={(data) => setExtraFormDatas({ user_type: data })}
        // onProfileChanged={(data) =>
        //   setExtraFormDatas((prevState) => ({
        //     ...prevState,
        //     profile_image: data,
        //   }))
        // }
      />
      <FormFooter />
    </Box>
  );
};

export default ProfileForm;
