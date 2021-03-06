const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const emailPass = (email) => {
  return email !== "" && validateEmail(email);
};

export const passwordPass = (password) => {
  return password !== "";
};

export const usernamePass = (username) => {
  return username !== "";
};

export const numToSeason = {
  1: "Winter",
  2: "Spring",
  3: "Summer",
  4: "Fall",
};
