import { USER, LOG_OUT } from "./actions/actionTypes";

const user = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER:
      return payload;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
};

export default user;
