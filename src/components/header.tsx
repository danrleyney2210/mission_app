import Link from 'next/link'
import { Search, ShoppingCart, UserRound, PlusCircle } from 'lucide-react'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={'/home'} className="text-2xl font-extrabold text-white">
          missioStore
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700"></div>
        <Link href={'/'} className="flex items-center gap-2 hoever: underline">
          <PlusCircle />
          <span className="text-sm">Cadastrar</span>
        </Link>
        <Link href={'/'} className="flex items-center gap-2 hoever: underline">
          <span className="text-sm">sair</span>
          <UserRound />
        </Link>
      </div>
    </div>
  )
}
