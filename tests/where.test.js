import { prismaClient } from "../src/prisma-client"

describe('Prisma', () => {
    it('should be can using OR and where', async () => {
        const product = await prismaClient.product.findMany({
            where : {
                OR : [
                    {
                        name : 'A'
                    },
                    {
                        name : 'B'
                    }
                ]
            },
            orderBy : {
                name : 'asc'
            }
        })

        console.info(product)

        expect(product.length).toBe(2)
        expect(product[0].name).toBe('A')
        expect(product[1].name).toBe('B')
    })
})  