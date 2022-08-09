export const navItems = [
	{
		title: "صفحه اصلی",
		linkTo: "/",
		renderIfLoggedIn: "not-sure",
	},
	{
		title: "ایجاد فروشگاه",
		linkTo: "/profile/business",
		renderIfLoggedIn: "not-sure",
	},
	{
		title: "ورود به حساب کاربری",
		linkTo: "/login",
		renderIfLoggedIn: false,
	},
	{
		title: "پشتیبانی",
		renderIfLoggedIn: "not-sure",
		subTitles: [
			{
				title: "تماس با پشتیبانی",
				linkTo: "/support",
			},
			{
				title: "ارسال تیکت",
				linkTo: "/tickets",
			},
		],
	},
	{
		title: "فرصت‌های شغلی",
		linkTo: "/",
		renderIfLoggedIn: "not-sure",
	},
	{
		title: "باشگاه مشتریان",
		linkTo: "/",
		renderIfLoggedIn: "not-sure",
	},
	{
		title: "درباره ما",
		linkTo: "/about",
		renderIfLoggedIn: "not-sure",
	},
	{
		title: "وبگاه",
		linkTo: "/",
		renderIfLoggedIn: "not-sure",
	},
];
