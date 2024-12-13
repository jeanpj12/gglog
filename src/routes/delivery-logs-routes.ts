import { DeliveryLogsController } from "@/controller/delivery-logs-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyAuserAuthorization } from "@/middlewares/verify-user-authorization";
import { Router } from "express";


const deliveryLogsRouter = Router()
const deliveryLogsController = new DeliveryLogsController()

deliveryLogsRouter.post("/",ensureAuthenticated, verifyAuserAuthorization(["sale"]), deliveryLogsController.create)
deliveryLogsRouter.get("/:delivery_id", ensureAuthenticated, verifyAuserAuthorization(["costumer", "sale"]), deliveryLogsController.show)

export {deliveryLogsRouter}