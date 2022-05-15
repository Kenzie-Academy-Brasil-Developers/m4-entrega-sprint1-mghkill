import users from "../database";

const getProfileUserService = (email) => {
  const user = users.find((u) => u.email === email);

  return user;
};

export default getProfileUserService;
