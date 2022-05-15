import deleteUsersService from "../services/deleteUserServices";

const deleteUsersController = (request, response) => {
  const { id } = request.params;

  const user = deleteUsersService(id);

  return response.status(200).json(user);
};
export default deleteUsersController;
