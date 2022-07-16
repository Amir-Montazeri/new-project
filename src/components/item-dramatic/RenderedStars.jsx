import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const RenderedStars = ({ currentStars }) => {
  const currentStarsArray = Array(parseInt(currentStars)).fill("1");
  const renderedFillStars = currentStarsArray.map((item, index) => (
    <AiFillStar key={index} />
  ));
  const emptyStarsArray = Array(5 - parseInt(currentStars)).fill("1");
  const renderedEmptyStars = emptyStarsArray.map((item, index) => (
    <AiOutlineStar key={index} />
  ));

  return (
    <div>
      {renderedFillStars}
      {renderedEmptyStars}
    </div>
  );
};

export default RenderedStars;
