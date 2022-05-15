import listUsersServices from "../services/listUsersServices";

const listUsersController = (_, response) => {
  const user = listUsersServices();
  return response.status(200).json(user);
};

export default listUsersController;
