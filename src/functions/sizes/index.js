import slidesPerView from "./slidesPerView.json";

export const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

export const calSlidesPerView = (
  innerWidth,
  slidesInXl,
  slidesIn2lg,
  slidesInLg,
  slidesInSm
) => {
  let result;
  if (innerWidth > 1100) {
    result = slidesInXl || slidesPerView.xl;
    console.log("was bigger than 1100");
  } else if (innerWidth > 800) {
    result = slidesIn2lg || slidesInXl;
    console.log("was bigger than 800");
  } else if (innerWidth > 600) {
    result = slidesInLg || slidesIn2lg;
    console.log("was bigger than 600");
  } else {
    result = slidesInSm || slidesInLg;
  }
  return result;
};
