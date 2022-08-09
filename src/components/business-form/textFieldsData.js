import nameIcon from "assets/icons-dir/name.svg";
import profileIcon from "assets/icons-dir/profile.svg";
import landlineIcon from "assets/icons-dir/landline.svg";
import addressIcon from "assets/icons-dir/address.svg";
import preCodeIcon from "assets/icons-dir/pre-code.svg";

export const textFields = [
	{
		items: [
			{
				name: "name",
				type: "text",
				placeholder: "نام فروشگاه",
				iconOnRight: nameIcon,
			},
			// {
			// 	name: "license_code",
			// 	placeholder: "شماره جواز",
			// 	iconOnRight: addressIcon,
			// },
			{
				name: "parvane_kasb",
				type: "file",
				placeholder: "عکس پروانه کسب",
				iconOnRight: preCodeIcon,
			},
			{
				name: "address",
				placeholder: "آدرس فروشگاه",
				iconOnRight: preCodeIcon,
			},
		],
		id: 0,
	},
	{
		items: [
			// {
			// 	name: "economic_code",
			// 	placeholder: "کد اقتصادی",
			// 	iconOnRight: landlineIcon,
			// },
			{
				name: "code_meli",
				placeholder: "کدملی/شناسنامه ملی",
				iconOnRight: landlineIcon,
			},
			// {
			// 	name: "Guild-unit-number",
			// 	type: "number",
			// 	placeholder: "شماره صنفی",
			// 	iconOnRight: preCodeIcon,
			// },
			{
				name: "card_meli_aks",
				type: "file",
				placeholder: "عکس کارت ملی",
				iconOnRight: preCodeIcon,
			},
			{
				name: "code_posti",
				placeholder: "کد پستی",
				iconOnRight: preCodeIcon,
			},
		],
		id: 1,
	},
	{
		items: [
			{
				name: "registraion_number",
				placeholder: "شماره شناسنامه/شماره ثبت",
				iconOnRight: landlineIcon,
			},
			{
				name: "image_path",
				type: "file",
				placeholder: "لوگو فروشگاه",
				iconOnRight: preCodeIcon,
			},
			{
				name: "shaba_banki",
				placeholder: "شماره شبای بانکی",
				iconOnRight: preCodeIcon,
			},
		],
		id: 2,
	},
];

// {
//   name: "profile_image",
//   type: "file",
//   placeholder: "تصویر پروفایل",
//   iconOnRight: profileIcon,
// },
