import userLoginService from "../services/userLoginService";

const userLoginController = (request, response) => {
  const { email, password } = request.body;

  const user = userLoginService(email, password);

  return response.status(200).json(user);
};

export default userLoginController;
