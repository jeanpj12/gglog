import { UsersController } from "@/controller/users-controller";
import { Router } from "express";

const usersController = new UsersController()
const usersRoutes = Router()

usersRoutes.post("/", usersController.create)

export { usersRoutes }