import Link from 'next/link'
import { Search, ShoppingCart, UserRound, PlusCircle } from 'lucide-react'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={'/home'} className="text-2xl font-extrabold text-white">
          missioStore
        </Link>

        <form
          action=""
          className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
        >
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="buscar Produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href={'/'} className="flex items-center gap-2 hoever: underline">
          <PlusCircle />
          <span className="text-sm">Cadastrar</span>
        </Link>

        <Link href={'/'} className="flex items-center gap-2 hoever: underline">
          <span className="text-sm">Junior</span>
          <UserRound />
        </Link>
      </div>
    </div>
  )
}
