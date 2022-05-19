import { Router } from "express";
import createUsersController from "../controllers/createUsersController";
import deleteUsersController from "../controllers/deleteUsersController";
import getProfileUserController from "../controllers/getProfileUserController";
import listUsersController from "../controllers/listUsersController";
import updateUsersController from "../controllers/updateUsersController";
import userLoginController from "../controllers/userLoginController";
import verifyAuthMiddleware from "../middleware/verifyAuthMiddleware";
import verifyEmailMiddleware from "../middleware/verifyEmailMiddleware";
import verifyIsAdmMiddleware from "../middleware/verifyIsAdmMiddleware";
import verifyKeysMiddleware from "../middleware/verifyKeysMiddleware";

const router = Router();

router.get(
  "/users",
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
router.get(
  "/users/profile",
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  getProfileUserController
);
router.post("/users", verifyEmailMiddleware, createUsersController);
router.post("/login", userLoginController);
router.delete(
  "/users/:id",
  verifyAuthMiddleware,
  verifyIsAdmMiddleware,
  deleteUsersController
);
router.put(
  "/users/:id",
  verifyAuthMiddleware,
  verifyKeysMiddleware,
  verifyEmailMiddleware,
  verifyIsAdmMiddleware,
  updateUsersController
);

export default router;
