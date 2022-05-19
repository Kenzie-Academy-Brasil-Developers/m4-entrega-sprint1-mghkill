import bcrypt from "bcryptjs/dist/bcrypt";
import users from "../database";

const updateUsersService = async (id, data, password = "123") => {
  const date = new Date();
  const hashedPass = await bcrypt.hash(password, 10);

  data.id = id;
  data.updatedOn = date;
  if (data.password) {
    data.password = hashedPass;
  }

  const userIndex = users.findIndex((item) => item.id === id);

  if (userIndex === -1) {
    return { Message: "User not found" };
  }

  users[userIndex] = { ...users[userIndex], ...data };

  return users[userIndex];
};

export default updateUsersService;
