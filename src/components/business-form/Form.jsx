import { Avatar, Grid, Typography } from "@mui/material";
import RenderedTextFields from "./RenderedTextFields";
import { textFields } from "./textFieldsData";
import { avatarStyles } from "./formStyles";
import useWindowSize from "hooks/useWindowSize";

function Form({ register, setType, setExtraFormData, onProfileChanged, errs }) {
	const { innerWidth } = useWindowSize(),
		isXl = innerWidth >= 865;

	const renderedTextFieldsContainer = items =>
		items.map(({ id, items }) => {
			return (
				<RenderedTextFields
					key={id}
					errs={errs}
					textFieldItems={items}
					register={register}
					setExtraFormData={setExtraFormData}
					onProfileChanged={onProfileChanged}
				/>
			);
		});

	// const renderedItems = (items) =>
	//   items.map(({ title, value }) => (
	//     <FormControlLabel
	//       key={value}
	//       value={value}
	//       control={<Radio onChange={(e) => setType(e.target.value)} />}
	//       label={title}
	//     />
	//   ));

	// const handleChange = e => {
	// 	setSelectedValue(e.target.value);
	// };

	return (
		<Grid
			container
			flexDirection={isXl ? "row" : "column"}
			alignItems={!isXl && "center"}>
			<Grid item>
				<Avatar variant={isXl ? "square" : ""} sx={avatarStyles} />
			</Grid>
			<Grid item>{renderedTextFieldsContainer(textFields)}</Grid>
			<Grid item>
				{/* <RadioGroup
					row
					value={selectedValue}
					onChange={handleChange}
					sx={{
						direction: "rtl",
						display: "flex",
						justifyContent: "space-between",
					}}></RadioGroup> */}
				{errs &&
					Object.values(errs).map(err => (
						<>
							<Typography
								sx={{ direction: "rtl", color: "red", lineHeight: "2" }}
								variant="body2"
								component="p">
								{err}
							</Typography>
						</>
					))}
			</Grid>
		</Grid>
	);
}

export default Form;
