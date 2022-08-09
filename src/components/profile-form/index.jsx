import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserOk } from "store/actions";
import Form from "./Form";
import FormFooter from "./FormFooter";
import { base_api_url } from "api";
import { getItem } from "lcoalStorage";
import ProfileFormFooter from "./ProfileFormFooter";

const ProfileForm = ({ setUserOk, user }) => {
	const navigate = useNavigate();
	const [extraFormDatas, setExtraFormDatas] = useState({});
	const { register, handleSubmit } = useForm();
	const [errs, setErrs] = useState();

	const handleOnFormSubmit = e => {
		const result = { ...e, ...extraFormDatas, profile_user_id: 1 };
		const accessToken = getItem("access");
		console.log("resu: ", result);
		axios
			.post(
				`${base_api_url}/Profile/`,
				{
					...result,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)
			.then(res => {
				console.log("succcc");
				result.user_type === "B"
					? navigate("/profile/business")
					: navigate("/");
				console.log("suc ", res);
				setUserOk();
			})
			.catch(err => {
				console.log("err: ", err.response.data);
				setErrs(err.response.data);
			});
	};

	return (
		<Box component="form" onSubmit={handleSubmit(handleOnFormSubmit)}>
			<Form
				register={register}
				setType={data => setExtraFormDatas({ user_type: data })}
				errs={errs}
				// onProfileChanged={(data) =>
				//   setExtraFormDatas((prevState) => ({
				//     ...prevState,
				//     profile_image: data,
				//   }))
				// }
			/>
			<FormFooter />
			<ProfileFormFooter />
		</Box>
	);
};

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps, { setUserOk })(ProfileForm);
