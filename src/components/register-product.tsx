'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCart } from '@/contexts/cart-context'
import { FormEvent, useState } from 'react'
import { Product } from '@/app/data/types/products'
import { api } from '@/app/data/api'

export interface AddToCartButtonProps {
  productId: number
}

export function RegisterProduct() {
  const [nameProduct, setNameProduct] = useState('')
  const [price, setPrice] = useState<number>(0)
  const [description, setDescription] = useState('')

  const router = useRouter()

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('chegou aqui')

    await api('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: nameProduct,
        slug: 'product-slug',
        price,
        image: '/moletom-ai-side.png',
        description,
        featured: true,
      }),
    })
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col gap-6 px-3 max-w-[600px] h-[560px]  w-full"
    >
      <h1 className="text-3xl bold text-center mb-6 mt-6">Cadastrar Produto</h1>
      <div className=" rounded-full gap-10 px-5 py-3 ring-zinc-700 bg-zinc-900">
        <input
          type="text"
          placeholder="Digite o Nome do produto"
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
          className="flex-1 w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
        />
      </div>

      <div className=" rounded-full gap-10 px-5 py-3 ring-zinc-700 bg-zinc-900">
        <input
          type="number"
          value={price}
          placeholder="Digite o preço"
          onChange={(e) => setPrice(Number(e.target.value))}
          className="flex-1 w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
        />
      </div>

      <div className="  gap-10 px-5 py-3 ring-zinc-700 bg-zinc-900">
        <textarea
          placeholder="Digite a descrição."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-1 px-3 py-3 w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
        />
      </div>

      <button
        id="button"
        className="bg-violet-500 py-2 rounded-full mt-6 px-4 font-semibold"
      >
        Cadastrar
      </button>
    </form>
  )
}
