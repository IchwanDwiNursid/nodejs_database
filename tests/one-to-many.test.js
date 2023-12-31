import { prismaClient } from "../src/prisma-client"

describe('Prisma Client', () => {
    it('should can insert and include', async () => {
        const comment = await prismaClient.comment.create({
            data : {
                customer_id : "yahya",
                title : "insert comment",
                description : "Description Comment"
            },
            include : {
                customer : true
            }
        });

        console.info(comment)
    })

    it('should can insert and include with relation', async () => {
        const customer = await prismaClient.customer.create({
            data : {
                id : "habil",
                name : "habil",
                email : "habil@gmail",
                phone : "08593424723427",
                comments : {
                    createMany : {
                        data : [
                            {
                                title : "Comment 1",
                                description : "Description 1"
                            },
                            {
                                title : "Comment 2",
                                description : "Description 2"
                            },
                            {
                                title : "Comment 3",
                                description : "Description 3"
                            },
                            {
                                title : "Comment 4",
                                description : "Description 4"
                            }
                        ]
                    }
                }
            },
            include : {
                comments: true
            }
        });

        console.info(customer)
    })

    it('should can find many with filter relation',async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                comments : {
                    some: {
                        title : {
                            contains : "Comment"
                        }
                    }
                }
            },
            include: {
                comments : true
            }
        });

        console.info(customers)
    })
})