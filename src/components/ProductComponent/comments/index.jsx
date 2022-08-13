import { base_api_url } from "api";
import axios from "axios";
import { getItem } from "lcoalStorage";
import { useState } from "react";
import Modal from "../DetailsProduct/modal";

const Comments = ({ id, isOpen, setIsOpen, comments }) => {
  const [newCommentContent, setNewCommentContent] = useState({
    score: null,
    comment: null,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const accessToken = getItem("access");

    axios.post(`${base_api_url}/addrate/${id}/`, newCommentContent, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(newCommentContent);
  };

  return (
    <Modal open={isOpen} handleClose={setIsOpen}>
      <div className="comments-box">
        <ul>
          {comments?.map((item) => (
            <li className="comment-modal-box" key={item.id}>
              {/* <p className="comment-userName">{item.userName}</p> */}
              <p className="comment-content">{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <form className="comment-form" onSubmit={handleFormSubmit}>
        <p className="comment-form-title">نظر خود را وارد کنید</p>
        <div>
          <input
            className="rate-input"
            type="number"
            min="0"
            max="5"
            value={newCommentContent.score}
            onChange={(e) =>
              setNewCommentContent((prevValue) => ({
                ...prevValue,
                score: e.target.value,
              }))
            }
            required
            defaultValue={0}
          ></input>
          <label>امتیاز</label>
        </div>
        <textarea
          className="text-area"
          required
          value={newCommentContent.comment}
          onChange={(e) =>
            setNewCommentContent((prevValue) => ({
              ...prevValue,
              comment: e.target.value,
            }))
          }
          placeholder="نظر خود را وارد کنید"
        ></textarea>
        <button type="submit" className="comment-btn-form">
          ارسال نظر
        </button>
      </form>
    </Modal>
  );
};

export default Comments;
