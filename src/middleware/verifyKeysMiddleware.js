const verifyKeysMiddleware = (request, response, next) => {
  const data = request.body;
  const arrKeys = [
    "name",
    "email",
    "password",
    "isAdm",
    "createdOn",
    "updatedOn",
    "id",
  ];

  const dateKeys = Object.keys(data);

  for (let i = 0; i < dateKeys.length; i++) {
    if (!arrKeys.includes(dateKeys[i])) {
      return response.status(400).json({ Message: "Invalid format keys" });
    }
  }
  next();
};

export default verifyKeysMiddleware;
