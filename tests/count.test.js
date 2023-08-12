import { prismaClient } from "../src/prisma-client"

describe("count", () => {
    it('should can count', async () => {
        const total = await prismaClient.customer.count({
            where :{
                name : "yahyaWaloni"
            }
        });
        expect(total).toBe(1)
    })
})