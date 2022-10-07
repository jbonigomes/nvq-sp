export const isNameValid = (name) =>
  name && name.length < 100 && name.match(/^[a-z ,.'-]+$/i)
