import { prismaClient } from "../src/prisma-client"

describe("Prisma Client" ,() => {
    it('should can create one to one relation', async () => {
        const wallet = await prismaClient.wallet.create({
            data : {
                id: 'yahya',
                customer_id : 'yahya',
                balance : 1000000
            },
            include : {
                customer : true
            }
        })

        console.info(wallet)
    })

    it('should can create one to one with relation', async () => {
        const customer = await prismaClient.customer.create({
            data : {
                id: 'indra',
                name : 'indra',
                email : 'indra123.gmail',
                phone : '085612345678',
                wallet : {
                    create : {
                        id : 'indra',
                        balance : 500000
                    }
                }
            },
            include : {
                wallet : true
            }
        })

        console.info(customer)
    })

    it('should can find one to one with relation', async () => {
        const customer = await prismaClient.customer.findUnique({
            where : {
                id : 'indra',         
            },
            include : {
                wallet : true
            }
        })

        console.info(customer)
    })
})