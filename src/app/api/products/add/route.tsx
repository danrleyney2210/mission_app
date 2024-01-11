import { NextApiRequest } from 'next'
import { z } from 'zod'
import data from '../data.json'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log('entrou aqui')

  const { searchParams } = request.nextUrl

  const title = searchParams.get('title')
  const price = searchParams.get('price')
  const description = searchParams.get('description')

  // console.log(title, price, description)

  const newProduct = {
    id: 10,
    title: title!,
    slug: 'camiseta-dowhile-2024',
    price: Number(price),
    image: '/camiseta-dowhile-2022.png',
    description: description!,
    featured: true,
  }

  const products = data.products.push(newProduct)

  return Response.json(products)
}
