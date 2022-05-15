import users from "../database";

const deleteUsersService = (id) => {
  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return { Message: "User not found" };
  }

  users.splice(userIndex, 1);

  return { Message: "User already deleted" };
};
export default deleteUsersService;
