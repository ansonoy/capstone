import { verifyJwt } from "@/lib/jwt"
import prisma from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const accessToken = request.headers.get("authorization")
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "unauthorized"
      }),
      {
        status: 401
      }
    )
  }

  //return cart contents that match user ID. Finish later.
  //my testing says this actually works so far, but it returns empty JSON as theres no data in userCart yet.
  const userCart = await prisma.cart.findMany({
    where: {
      userId: params.id
    },
    include: {
      Product: {
        select: {
          name: true,
          _count: true,
          cart: true,
          price: true
        }
      }
    }
  })
  return new Response(JSON.stringify(userCart))
}
