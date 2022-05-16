import jwt from "jsonwebtoken";
import users from "../database";

const verifyIsAdmMiddleware = (request, response, next) => {
  const token = request.headers.authorization;

  const decoded = jwt.decode(token);

  const email = decoded.email;

  const user = users.find((e) => e.email === email);

  if (!user) {
    return response.status(400).json({ message: "Admin permission required!" });
  }

  next();
};

export default verifyIsAdmMiddleware;
