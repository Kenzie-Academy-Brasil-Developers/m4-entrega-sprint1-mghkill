import bcrypt from "bcryptjs/dist/bcrypt";
import { v4 as uuidv4 } from "uuid";
import users from "../database";

const createUsersService = async (name, email, password) => {
  const hashedPass = await bcrypt.hash(password, 10);
  const date = new Date();
  const newUser = {
    name,
    email,
    password: hashedPass,
    isAdm: true,
    createdOn: date,
    updatedOn: date,
    id: uuidv4(),
  };
  users.push(newUser);

  return newUser;
};

export default createUsersService;
