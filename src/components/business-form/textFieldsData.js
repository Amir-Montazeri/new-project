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
			{
				name: "license_code",
				placeholder: "شماره جواز",
				iconOnRight: addressIcon,
			},
		],
		id: 0,
	},
	{
		items: [
			{
				name: "economic_code",
				placeholder: "کد اقتصادی",
				iconOnRight: landlineIcon,
			},
			{
				name: "Guild-unit-number",
				type: "number",
				placeholder: "شماره صنفی",
				iconOnRight: preCodeIcon,
			},
		],
		id: 1,
	},
	{
		items: [
			{
				name: "registraion_number",
				placeholder: "شماره ثبت",
				iconOnRight: landlineIcon,
			},
			{
				name: "image_path",
				type: "file",
				placeholder: "لوگو فروشگاه",
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
