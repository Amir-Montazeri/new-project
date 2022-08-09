import { Box } from "@mui/material";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import pagesName from "./pagesName";

function Ads({ adBanners }) {
	const location = useLocation();

	return (
		adBanners[pagesName[location.pathname]] && (
			<a href={adBanners[pagesName[location.pathname]]?.url || ""}>
				<Box
					sx={{
						position: "relative",
						height: "100px",
						cursor: "pointer",
						"*": { zIndex: "20" },
					}}>
					<Box
						sx={{
							width: "100vw",
							height: "100px",
							overflow: "hidden",
						}}>
						<img
							src={adBanners[pagesName[location.pathname]]?.banner_file || ""}
							className="ad-banner"
							alt="ads banner"
						/>
					</Box>
				</Box>
			</a>
		)
	);
}

const mapStateToProps = state => ({
	adBanners: state.adBanners,
});

export default connect(mapStateToProps)(Ads);
