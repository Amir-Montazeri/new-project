import { createRef } from "react";
import { FormControl, Grid, InputLabel, OutlinedInput } from "@mui/material";
import { inputStyles } from "./renderedTextFieldsStyles";
import useWindowSize from "hooks/useWindowSize";
import { useState } from "react";
import { useEffect } from "react";
import { getBase64 } from "utils/FileHelper";
import axios from "axios";
import { base_api_url } from "api";

const RenderedTextFields = ({
	textFieldItems,
	register,
	onProfileChanged,
	errs,
	setExtraFormData,
}) => {
	const [profileImg, setProfileImg] = useState();
	const { innerWidth } = useWindowSize(),
		isXl = innerWidth >= 865;
	const inputRef = createRef();

	const convertImage = async () => {
		await getBase64(profileImg.path).then(res => {
			setProfileImg(prevState => ({ path: prevState.path, converted: res }));
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

	const handleProfileChanged = (key, e) => {
		let firstFile = e.target.files[0];
		const formData = new FormData();

		formData.append("image", firstFile);
		console.log("before: ", { [key]: e.target.files[0] });
		setExtraFormData({ [key]: e.target.files[0] });
	};

	const renderedTextField = items =>
		items.map(({ name, type = "text", placeholder, iconOnRight }) => {
			const fileProps =
				type === "file"
					? {
							onClick: () => inputRef.current.click(),
					  }
					: {};

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
					}}>
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
								style={{ display: "none" }}
								ref={inputRef}
								onChange={e => handleProfileChanged(name, e)}
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
