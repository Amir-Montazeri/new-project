import Modal from "../DetailsProduct/modal";

const Comments = ({ isOpen, setIsOpen, comments }) => {
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
