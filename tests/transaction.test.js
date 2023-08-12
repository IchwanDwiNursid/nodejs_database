import { prismaClient } from "../src/prisma-client"

describe("Prisma Client" , () => {
    it('should can execute sequential transaction', async () => {
        const [tono,yahya] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id : "tono",
                    email : "tono@gmail",
                    name : "tonoWaluya",
                    phone : "082937523524"
                }
            }),
            prismaClient.customer.create({
                data:{
                    id : "yahya",
                    email : "yahya@gmail",
                    name : "yahyaWaloni",
                    phone : "08230276634"
                }
            })
        ])

        expect(tono.name).toBe("tonoWaluya")
        expect(yahya.name).toBe("yahyaWaloni")
    });

    it('should can execute sequential transaction', async () => {
        const [yusuf,tina] = await prismaClient.$transaction(async (prisma) => {
            const yusuf = await prisma.customer.create({
                data : {
                    id : "yusuf",
                    email : "yusuf@gmail",
                    name : "yusufGilang",
                    phone : "08423257824"
                }
            })

            const tina = await prismaClient.customer.create({
                data : {
                    id : "tina",
                    email : "tina@gmail",
                    name : "tinaToon",
                    phone : "086724392340"
                }
            })

            return [yusuf,tina]
        })

        expect(yusuf.name).toBe("yusufGilang")
        expect(tina.name).toBe("tinaToon")
    });

})