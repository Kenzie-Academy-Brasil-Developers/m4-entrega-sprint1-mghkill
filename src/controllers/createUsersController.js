import createUsersService from "../services/createUserServices";

const createUsersController = async (request, response) => {
  const { name, email, password } = request.body;

  const user = await createUsersService(name, email, password);

  return response.status(201).json(user);
};

export default createUsersController;
