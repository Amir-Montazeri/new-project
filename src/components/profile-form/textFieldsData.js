import nameIcon from "assets/icons-dir/name.svg";
import profileIcon from "assets/icons-dir/profile.svg";
import phoneNumberIcon from "assets/icons-dir/phoneNumber.svg";
import landlineIcon from "assets/icons-dir/landline.svg";
import emailIcon from "assets/icons-dir/email.svg";
import addressIcon from "assets/icons-dir/address.svg";

export const textFields = [
  {
    items: [
      {
        name: "full_name",
        placeholder: "نام و نام خانوادگی",
        iconOnRight: nameIcon,
      },
      {
        name: "profile_pic",
        placeholder: "تصویر پروفایل",
        iconOnRight: profileIcon,
      },
    ],
    id: 0,
  },
  {
    items: [
      {
        name: "phone_number",
        placeholder: "شماره همراه",
        iconOnRight: phoneNumberIcon,
      },
      {
        name: "landline",
        placeholder: "تلفن ثابت",
        iconOnRight: landlineIcon,
      },
    ],
    id: 1,
  },
  {
    items: [
      {
        name: "email",
        placeholder: "ایمیل",
        iconOnRight: emailIcon,
      },
      {
        name: "address",
        placeholder: "آدرس",
        iconOnRight: addressIcon,
      },
    ],
    id: 2,
  },
];
