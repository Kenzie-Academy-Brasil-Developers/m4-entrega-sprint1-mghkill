import jwt from "jsonwebtoken";

const verifyAuthMiddleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response
      .status(401)
      .json({ Message: "Missing Authorization token" });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ Message: "Invalid token." });
    }
  });
  next();
};
export default verifyAuthMiddleware;
