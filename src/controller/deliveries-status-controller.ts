import { prisma } from "@/database/prisma";
import { Response, Request } from "express";
import z from "zod";


class DeliveriesStatusController {
    async update(req: Request, res: Response) {
        const bodySchema = z.object({
            status: z.enum(["processing", "shipped", "delivered"])
        })

        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(req.params)
        const { status } = bodySchema.parse(req.body)

        await prisma.delivery.update(
            {
                data: {
                    status,
                },
                where: {
                    id
                }
            })

        await prisma.deliveryLog.create(
            {
                data: {
                    description: status,
                    deliveryId: id
                }
            }
        )

        res.json()

    }
}

export { DeliveriesStatusController }