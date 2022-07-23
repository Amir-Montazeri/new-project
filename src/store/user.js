import { USER, LOG_OUT, SET_USER_OK } from "./actions/actionTypes";

const user = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER:
      return payload;
    case SET_USER_OK:
      return { ...payload, is_ok: true };
    case LOG_OUT:
      return null;
    default:
      return state;
  }
};

export default user;
