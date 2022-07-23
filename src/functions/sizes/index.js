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
  if (innerWidth > 1200) {
    result = slidesInXl || slidesPerView.xl;
  } else if (innerWidth > 800) {
    result = slidesIn2lg || slidesInXl;
  } else if (innerWidth > 600) {
    result = slidesInLg || slidesIn2lg;
  } else {
    result = slidesInSm || slidesInLg;
  }
  return result;
};
