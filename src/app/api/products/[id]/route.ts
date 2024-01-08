import data from '../data.json'
import { z } from 'zod'
import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const id = Number(params.id)
  const idPrdouc = z.number().parse(id)

  const product = data.products.find((product) => product.id === idPrdouc)

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }

  return Response.json(product)
}
