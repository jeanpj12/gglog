import request from "supertest"
import { app } from "@/app"
import { prisma } from "@/database/prisma"

describe("Users", () => {

    let user_id: string

    afterAll(async () => {
        await prisma.user.delete({ where: { id: user_id } })
    })

    it("should create a new user sucessfully", async () => {
        const response = await request(app).post("/users").send({
            name: "Test User",
            email: "testuser@email.com",
            password: "pass123"
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body.name).toBe("Test User")

        user_id = response.body.id
    })

    it("should throw an error if user with same email already exists", async () => {
        const response = await request(app).post("/users").send({
            name: "Duplicated User",
            email: "testuser@email.com",
            password: "pass123"
        })

        expect(response.status).toBe(400)
        expect(response.body.message).toBe("Email already registered.")
    })

    it("should throw a validation error if email is invalid", async () => {
        const response = await request(app).post("/users").send({
            name: "Test User",
            email: "invalid-email",
            password: "pass123"
        })

        expect(response.status).toBe(400)
        expect(response.body.message).toBe("Validation error")
    })
})