import { createRef } from "react";
import { FormControl, Grid, InputLabel, OutlinedInput } from "@mui/material";
import { inputStyles } from "./renderedTextFieldsStyles";
import useWindowSize from "hooks/useWindowSize";
import { useState } from "react";
import { useEffect } from "react";
import { getBase64 } from "utils/FileHelper";

const RenderedTextFields = ({ textFieldItems, register, onProfileChanged }) => {
  const [profileImg, setProfileImg] = useState();
  const { innerWidth } = useWindowSize(),
    isXl = innerWidth >= 865;
  const inputRef = createRef();

  const convertImage = async () => {
    await getBase64(profileImg.path).then((res) => {
      setProfileImg((prevState) => ({ path: prevState.path, converted: res }));
    });
  };

  useEffect(() => {
    if (profileImg?.file) {
      convertImage();
    }
    if (profileImg?.converted && !profileImg?.file) {
      onProfileChanged(profileImg.converted);
    }
  }, [profileImg]);

  const renderedTextField = (items) =>
    items.map(({ name, type = "text", placeholder, iconOnRight }) => {
      const fileProps =
        type === "file"
          ? {
              onClick: () => inputRef.current.click(),
            }
          : {};

      const handleProfileChanged = (e) => {
        const fileObj = e.target.files && e.target.files[0];
        if (!fileObj) return;

        const objectUrl = URL.createObjectURL(fileObj);
        setProfileImg({ file: objectUrl, path: fileObj });
      };

      return (
        <Grid
          item
          key={name}
          name={name}
          flex={1}
          {...fileProps}
          sx={{
            cursor: type === "file" ? "pointer !important" : "",
            "*": {
              cursor: type === "file" ? "pointer !important" : "",
            },
            ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
              left: "unset !important",
              right: 0,
              transform: "translate(-50px, 16px)",
            },
          }}
        >
          <FormControl variant="outlined">
            <InputLabel htmlFor={name}>
              {type === "file" && profileImg
                ? profileImg.path.name
                : placeholder}
            </InputLabel>
            <OutlinedInput
              id={name || ""}
              name={name}
              type={type === "file" ? "" : type}
              endAdornment={<img src={iconOnRight} alt={name} height="20px" />}
              sx={inputStyles}
              label={profileImg ? profileImg.path.name : placeholder}
              {...register(name)}
            />
            {type === "file" && (
              <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                {...register("profile_image")}
                onChange={handleProfileChanged}
              />
            )}
          </FormControl>
        </Grid>
      );
    });

  return (
    <Grid container flexDirection={isXl ? "row" : "column"}>
      {renderedTextField(textFieldItems)}
    </Grid>
  );
};

export default RenderedTextFields;
