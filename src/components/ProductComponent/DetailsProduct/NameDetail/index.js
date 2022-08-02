import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Modal from "../modal";
const NameDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const commentData = [
    { id: 0, userName: "ali", content: "شسنیایسش" },
    { id: 1, userName: "ali1", content: "شسنیایسش" },
    { id: 2, userName: "ali2", content: "شسنیایسش" },
    { id: 3, userName: "ali3", content: "شسنیایسش" },
    { id: 4, userName: "ali4", content: "شسنیایسش" },
    { id: 5, userName: "ali5", content: "شسنیایسش" },
    { id: 6, userName: "ali6", content: "شسنیایسش" },
    { id: 7, userName: "ali7", content: "شسنیایسش" },
    { id: 8, userName: "ali8", content: "شسنیایسش" },
    { id: 9, userName: "ali9", content: "شسنیایسش" },
    { id: 10, userName: "ali10", content: "شسنیایسش" },
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
              <li key={item.id}>
                <p>{item.userName}</p>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="comment-form"></div>
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
