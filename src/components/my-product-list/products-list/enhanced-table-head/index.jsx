import {
	Box,
	Checkbox,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const headCells = [
	{
		id: "name",
		numeric: false,
		disablePadding: true,
		sizeDeference: "+ 20px",
		label: "محصول",
	},
	{
		id: "calories",
		numeric: true,
		disablePadding: false,
		sizeDeference: "- 20px",
		label: "زمان آماده سازی",
	},
	{
		id: "fat",
		numeric: true,
		disablePadding: false,
		sizeDeference: "- 20px",
		label: "موجودی",
	},
	{
		id: "carbs",
		numeric: true,
		disablePadding: false,
		sizeDeference: "- 20px",
		label: "قیمت",
	},
	{
		id: "protein",
		numeric: true,
		disablePadding: false,
		sizeDeference: "- 20px",
		label: "وضعیت",
	},
];

function EnhancedTableHead(props) {
	const {
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props;
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							"aria-label": "select all desserts",
						}}
					/>
				</TableCell>
				{headCells.map(headCell => (
					<TableCell
						key={headCell.id}
						sx={{
							// width: `calc(20% ${headCell.sizeDeference})`,
							padding: "0",
						}}
						// align={headCell.numeric ? "right" : "left"}
						align="center"
						padding={headCell.disablePadding ? "none" : "normal"}
						sortDirection={orderBy === headCell.id ? order : false}>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							sx={{ textAlign: "center", span: { textAlign: "center" } }}
							onClick={createSortHandler(headCell.id)}>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "desc" ? "sorted descending" : "sorted ascending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export default EnhancedTableHead;
