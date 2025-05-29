export const isNameValid = (name) =>
  name && name.length < 100 && name.match(/^[a-z ,.'-]+$/i)

export const isEmailValid = (email) =>
  email && email.length < 100 && email.match(/^[a-z ,.'-@_]+$/i)
