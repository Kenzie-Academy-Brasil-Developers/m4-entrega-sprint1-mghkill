import updateUsersService from "../services/updateUserServices";

const updateUsersController = async (request, response) => {
  const { id } = request.params;
  const data = request.body;

  const user = await updateUsersService(id, data);

  return response.status(200).json(user);
};
export default updateUsersController;
