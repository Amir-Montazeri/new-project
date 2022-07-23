export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const deleteItem = (key) => {
  localStorage.removeItem(key);
};
