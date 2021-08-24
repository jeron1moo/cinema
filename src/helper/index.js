export default (sel, value) => {
  if (!sel) return false;
  return sel.seats.includes(value);
};
