export const toPersianNumber = (n) => {
  const farsiDigits = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
    ".": ".",
    ",": ",",
  };

  return n
    .toString()
    .split("")
    .map((x) => farsiDigits[x])
    .join("");
};

export const toDouble = (number) => {
  let result = number;
  if (number < 10) {
    result = `0${number}`;
  } else result = result.toString();
  return result;
};
