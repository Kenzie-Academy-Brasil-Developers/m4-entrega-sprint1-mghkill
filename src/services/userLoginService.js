import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import users from "../database";

const userLoginService = (email, password) => {
  const user = users.find((u) => u.email === email);

  if (!user) {
    return { Message: "User or password is incorrect" };
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return { Message: "User or password is incorrect" };
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return { token: token };
};
export default userLoginService;
