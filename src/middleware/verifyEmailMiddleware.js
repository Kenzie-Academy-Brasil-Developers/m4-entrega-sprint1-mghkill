import users from "../database";

const verifyEmailMiddleware = (request, response, next) => {
  const { email } = request.body;

  const userAlreadyExists = users.find((u) => u.email === email);

  if (userAlreadyExists) {
    return response.status(401).json({ Message: "Wrong email/password" });
  }
  next();
};
export default verifyEmailMiddleware;
