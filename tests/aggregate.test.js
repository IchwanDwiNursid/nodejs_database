import { prismaClient } from "../src/prisma-client"

describe("", () => {
    it('should can do aggregate function', async () => {
        const result = await prismaClient.product.aggregate({
            _min : {
                price : true,
                stock : true
            },
            _max : {
                price : true,
                stock : true
            },
            _avg : {
                price : true,
                stock : true
            },
        })

        console.info(result)
    });
    
    it('should can do aggregate function with grup By', async () => {
        const result = await prismaClient.product.groupBy({
            by: ['category'],
            _min : {
                price : true,
                stock : true
            },
            _max : {
                price : true,
                stock : true
            },
            _avg : {
                price : true,
                stock : true
            },
        })

        for (const item of result) {
            console.info(`Category ${item.category}, min ${item._min.price},max ${item._max.price}, avg ${item._avg.price}`)
        }
    })

    it('should can do aggregate function with grub by and having', async () => {
        const result = await prismaClient.product.groupBy({
            by : ["category"],
            _min : {
                price : true,
                stock : true
            },
            _max : {
                price : true,
                stock : true
            },
            _avg : {
                price : true,
                stock : true
            },
            having : {
                price : {
                    _avg :{
                        gt : 3000
                    } 
                }
            }
        })

        console.info(result)
    })
})