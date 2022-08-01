import { AiFillStar } from "react-icons/ai";
const NameDetail = () => {
  return (
    <div>
      <h3 className="product-title">سفره یکبار مصرف</h3>
      <div className="rate">
        <AiFillStar className="star" />
        <span>3.3</span>
        <span className="number-of-rate">{"(9)"}</span>
      </div>
    </div>
  );
};
export default NameDetail;
