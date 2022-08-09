import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserOk } from "store/actions";
import Form from "./Form";
import FormButton from "./FormButton";
import FormFooter from "./FormFooter";
import { base_api_url } from "api";
import { getItem } from "lcoalStorage";

const BusinessForm = ({ setUserOk, user }) => {
	const navigate = useNavigate();
	const [extraFormDatas, setExtraFormDatas] = useState({});
	const { register, handleSubmit } = useForm();
	const [errs, setErrs] = useState();

	const handleOnFormSubmit = e => {
		let formData = new FormData();
		const accessToken = getItem("access");
		const results = { ...e, ...extraFormDatas };
		Object.keys(results).map(resultKey => {
			formData.append(resultKey, results[resultKey] || "");
		});
		formData.append("profile_user_id", 2);
		axios
			.post(`${base_api_url}/BusinessInfo/`, formData, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			.then(res => {
				console.log("suc ", res);
				navigate("/");
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
				setExtraFormData={data =>
					setExtraFormDatas(prevState => ({ ...prevState, ...data }))
				}
			/>
			<FormButton />
			<FormFooter />
		</Box>
	);
};

const mapStateToProps = state => ({
	user: state.user,
});

export default connect(mapStateToProps, { setUserOk })(BusinessForm);
