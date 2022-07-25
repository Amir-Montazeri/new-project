import nameIcon from "assets/icons-dir/name.svg";
import profileIcon from "assets/icons-dir/profile.svg";
import landlineIcon from "assets/icons-dir/landline.svg";
import addressIcon from "assets/icons-dir/address.svg";
import preCodeIcon from "assets/icons-dir/pre-code.svg";

export const textFields = [
  {
    items: [
      {
        name: "fullname",
        type: "text",
        placeholder: "نام و نام خانوادگی",
        iconOnRight: nameIcon,
      },
      {
        name: "address_text",
        placeholder: "آدرس",
        iconOnRight: addressIcon,
      },
    ],
    id: 0,
  },
  // {
  //   items: [
  //     {
  //       name: "phone_number",
  //       placeholder: "تلفن ثابت",
  //       iconOnRight: landlineIcon,
  //     },
  //     {
  //       name: "phone_pre_code",
  //       type: "number",
  //       placeholder: "پیش شماره",
  //       iconOnRight: preCodeIcon,
  //     },
  //   ],
  //   id: 1,
  // },
];

// {
//   name: "profile_image",
//   type: "file",
//   placeholder: "تصویر پروفایل",
//   iconOnRight: profileIcon,
// },
