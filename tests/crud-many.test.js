import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it('should can create many records' , async () => {
        const {count} = await prismaClient.customer.createMany({
            data: [
                {
                    id : "doni",
                    email : "doni@yahoo.com",
                    phone: "087777777777",
                    name : "doni"
                },
                {
                    id : "soleh",
                    email : "soleh@yahoo",
                    phone : "0856888888",
                    name : "soleh"
                }
            ]
        })
        expect(count).toBe(2)
    })

    it('should can update many records' , async () => {
        const {count} = await prismaClient.customer.updateMany({
            data: {
                email : "darwin@gmail"
            },
            where:{
                name : "soleh"
            }
        })
        expect(count).toBe(1)
    })

    it('should can delete many records' , async () => {
        const {count} = await prismaClient.customer.deleteMany({
            where:{
                name : "soleh"
            }
        })
        expect(count).toBe(1)
    })

    it('should can read many records' , async () => {
        const customers = await prismaClient.customer.findMany({})
        console.log(customers)
    })
})