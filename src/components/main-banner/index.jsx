import { Box } from "@mui/material";
import { base_api_url } from "api";
import axios from "axios";
import Slider from "components/items-slider/Slider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { containerStyles } from "./mainBannerStyles";

const config = {
		sliderWithRadius: false,
	},
	swiperConfig = {
		navigation: false,
	};

const MainBanner = () => {
	const [imageUrl, setImageUrl] = useState();

	useEffect(() => {
		axios.get(`${base_api_url}/sliders/`).then(res => {
			const { data } = res;
			setImageUrl(data);
		});
	}, []);

	const renderedSlides = items =>
		items?.map(item => (
			<SwiperSlide>
				<Link to={item.url || "/"}>
					<img alt={item.alt} width="100%" src={item.image} />
				</Link>
			</SwiperSlide>
		));

	return (
		<Box sx={containerStyles}>
			<Slider
				{...config}
				swiperConfig={swiperConfig}
				autoSildesPerView
				sliderHeight="auto">
				{renderedSlides(imageUrl?.results)}
			</Slider>
		</Box>
	);
};

export default MainBanner;
