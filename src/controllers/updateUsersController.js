import updateUsersService from "../services/updateUserServices";

const updateUsersController = (request, response) => {
  const { id } = request.params;
  const { name, email } = request.body;

  const user = updateUsersService(id, email, name);

  return response.status(200).json(user);
};
export default updateUsersController;
