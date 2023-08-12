import { prismaClient } from "../src/prisma-client"


describe("prisma client", () => {
    it('should be able to create customer', async () => {
       const customer = await prismaClient.customer.create({
            data:{
                id: "aji",
                email:"aji@gmail",
                name:"ajisomplak",
                phone:"0833333377"
            }
        })
        expect(customer.id).toBe("aji")
        expect(customer.email).toBe("aji@gmail")
        expect(customer.name).toBe("ajisomplak")
        expect(customer.phone).toBe("0833333377")
    });

    it('should be able to update customer', async () => {
        const customer = await prismaClient.customer.update({
             data:{
                 name:"ajisaka"
             },
             where:{
                id:"aji" 
             }
         })
         expect(customer.id).toBe("aji")
         expect(customer.email).toBe("aji@gmail")
         expect(customer.name).toBe("ajisaka")
         expect(customer.phone).toBe("0833333377")
     });

     it('should be able to read customer', async () => {
        const customer = await prismaClient.customer.findUnique({
             where:{
                id:"aji" 
             }
         })
         expect(customer.id).toBe("aji")
         expect(customer.email).toBe("aji@gmail")
         expect(customer.name).toBe("ajisaka")
         expect(customer.phone).toBe("0833333377")
     });

     it('should be able to delete customer', async () => {
        const customer = await prismaClient.customer.delete({
             where:{
                id:"aji" 
             }
         })
         expect(customer.id).toBe("aji")
         expect(customer.email).toBe("aji@gmail")
         expect(customer.name).toBe("ajisaka")
         expect(customer.phone).toBe("0833333377")
     });
})