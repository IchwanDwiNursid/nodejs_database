import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it('should can create and select fields', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id : "gani",
                email : "gani@yahoo",
                phone : "08576432087",
                name : "ganiGunawan"
            },
            select : {
                id : true,
                name : true
            }
        })
       
        expect(customer.name).toBe('ganiGunawan')
        expect(customer.id).toBe('gani')
        expect(customer.email).toBeUndefined()
        expect(customer.phone).toBeUndefined()
    })
})