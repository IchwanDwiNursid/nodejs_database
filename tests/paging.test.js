import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it('should can do paging', async () => {
        const page1 = await prismaClient.customer.findMany({
            take : 1,
            skip : 0
        });
        expect(page1.length).toBe(1)

        const page2 = await prismaClient.customer.findMany({
            take : 1,
            skip : 1
        });
        expect(page2.length).toBe(1)

        const page3 = await prismaClient.customer.findMany({
            take : 1,
            skip : 2
        });
        expect(page3.length).toBe(1)
        
    })
})