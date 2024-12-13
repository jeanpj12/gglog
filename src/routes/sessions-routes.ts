import { Router } from "express";
import { SessionsController } from "@/controller/sessions-controller";

const sessionsRoutes = Router()
const sessionsContoller = new SessionsController()

sessionsRoutes.post("/", sessionsContoller.create)

export { sessionsRoutes }