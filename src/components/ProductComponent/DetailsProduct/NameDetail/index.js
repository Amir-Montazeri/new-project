import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Modal from "../modal";
const NameDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const commentData = [
    { id: 0, userName: "ali", content: "خیلی عالی" },
    { id: 1, userName: "ali1", content: "خیلی عالی" },
    { id: 2, userName: "ali2", content: "خیلی عالی" },
    { id: 3, userName: "ali3", content: "خیلی عالی" },
    { id: 4, userName: "ali4", content: "خیلی عالی" },
    { id: 5, userName: "ali5", content: "خیلی عالی" },
    { id: 6, userName: "ali6", content: "خیلی عالی" },
    { id: 7, userName: "ali7", content: "خیلی عالی" },
    { id: 8, userName: "ali8", content: "خیلی عالی" },
    { id: 9, userName: "ali9", content: "خیلی عالی" },
    { id: 10, userName: "ali10", content: "خیلی عالی" },
  ];

  const showModal = () => {
    setIsOpen((p) => !p);
    console.log(isOpen);
  };
  console.log(isOpen);
  return (
    <div>
      <Modal open={isOpen} handleClose={setIsOpen}>
        <div className="comments-box">
          <ul>
            {commentData.map((item) => (
              <li className="comment-modal-box" key={item.id}>
                <p className="comment-userName">{item.userName}</p>
                <p className="comment-content">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <form className="comment-form">
          <p className="comment-form-title">نظر خود را وارد کنید</p>
          <div>
            <input
              className="rate-input"
              type="number"
              min="0"
              max="5"
              required
              defaultValue={0}
            ></input>
            <label>امتیاز</label>
          </div>
          <textarea
            className="text-area"
            required
            type=""
            placeholder="نظر خود را وارد کنید"
          ></textarea>
          <button type="submit" className="comment-btn-form">
            ارسال نظر
          </button>
        </form>
      </Modal>
      <h3 className="product-title">سفره یکبار مصرف</h3>
      <div className="rate">
        <AiFillStar className="star" />
        <p>3.3</p>
        <p className="number-of-rate">{"(9)"}</p>
        <p className="comment-btn" onClick={showModal}>
          دیدگاه 10
        </p>
      </div>
    </div>
  );
};
export default NameDetail;
