import { Router } from "express";
import { DeliveriesController } from "@/controller/deliveries-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyAuserAuthorization } from "@/middlewares/verify-user-authorization";
import { DeliveriesStatusController } from "@/controller/deliveries-status-controller";

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()
const deliveriesStatusController = new DeliveriesStatusController()

deliveriesRoutes.use(ensureAuthenticated, verifyAuserAuthorization(["sale"]))
deliveriesRoutes.post("/", deliveriesController.create)
deliveriesRoutes.get("/", deliveriesController.index)
deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update)

export { deliveriesRoutes }