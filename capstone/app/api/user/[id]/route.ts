import prisma from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  //return cart contents that match user ID. Finish later.
  const userCart = await prisma.cart.findMany({
    where: {
      userId: params.id
    },
    include: {
      Product: {
        select: {}
      }
    }
  })
}