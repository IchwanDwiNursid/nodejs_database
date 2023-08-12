import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it('should be able to create with auto_increment primary key' , async ()=> {
        const category = await prismaClient.category.create({
            data : {
                name : 'Food'
            }
        })


        console.info(category)
        expect(category.name).toBe('Food')
        expect(category).toHaveProperty("id")
    })
})