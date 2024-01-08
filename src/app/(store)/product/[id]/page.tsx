import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/products'
import Image from 'next/image'

interface ProductProps {
  params: {
    id: string
  }
}

async function getProduct(id: string): Promise<Product> {
  const response = await api(`/products/${id}`, {
    cache: 'no-store',
  })
  const products = await response.json()

  return products
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.id)

  return (
    <div className="relative grid max-h=[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          className="relative"
          src={product.image}
          width={1000}
          height={1000}
          quality={100}
          alt="image"
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold learning-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$10,75
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-withe"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}
