import { prismaClient } from "../src/prisma-client"


describe('Prisma Client' , () => {
    it('Should can insert many to many relation', async () => {
        const like = await prismaClient.like.create({
            data : {
                customer_id : "dani",
                product_id : "P0001"
            },
            include : {
                customer : true,
                product: true
            }   
        })

        console.log(like)
    })

    it('should can find one with many to many relation', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id : "dani"
            },
            include: {
                likes: {
                    include : {
                        product : true
                    }
                }
            }
        })

        console.info(JSON.stringify(customer))
    })

    it('should create implicit relation', async() => {
        const customer = await prismaClient.customer.update({
            where: {
                id : 'joko'
            },
            data : {
               loves : {
                    connect : [
                        {
                            id : 'P0001'
                        },
                        {
                            id : "P0002"
                        }
                    ]
               } 
            },
            include :{
                loves : true
            }
        })

        console.info(customer)
    })

    it('should find many implicit relation', async() => {
        const customer = await prismaClient.customer.findMany({
            where : {
                loves: {
                    some : {
                        name : {
                            contains : "A"
                        }
                    }
                }
            },
            include : {
                loves : true
            }
        })

        console.info(customer)
    })
})