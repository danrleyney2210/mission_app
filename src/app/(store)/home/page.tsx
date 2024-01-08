import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/products'

import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products', {
    cache: 'no-store',
  })
  const products = await response.json()

  return products
}

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-4">
      {products.map((product: Product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group relative col-span-3 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex gap-3 justify-center"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={384}
              height={384}
              quality={100}
              alt="guitar 1"
            />

            <div className="absolute bottom-10  h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
