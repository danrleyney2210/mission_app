'use client'

import { Search, UserRound, KeyRound, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'

export default function Login() {
  const [error, setError] = useState('')
  const [user, setUser] = useState('')
  const [key, setKey] = useState('')
  const [showKey, setShowKey] = useState(false)

  const router = useRouter()

  function authLogin() {
    if (user === 'admin' && key === 'admin') {
      router.push('/home')
    } else {
      setError('Usuário ou senha errado')
    }
  }

  return (
    <div className="h-[560px] flex justify-center items-center">
      <div className="max-w-[300px] w-full ">
        <div className="text-center mb-6">
          <h1 className="text-xl bold">Faça o Login</h1>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-3 rounded-full px-5 py-3 ring-zinc-700 bg-zinc-900">
            <UserRound className="w-5 h-5 text-zinc-500" />
            <input
              type="text"
              id="user"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="buscar Produtos..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            />
          </div>

          <div className="flex gap-3 rounded-full px-5 py-3 ring-zinc-700 bg-zinc-900">
            <KeyRound className="w-5 h-5 text-zinc-500" />
            <input
              type={showKey ? 'text' : 'password'}
              id="password"
              name="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="buscar Produtos..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            />
            {showKey ? (
              <EyeOff
                className="w-5 h-5 text-zinc-500"
                onClick={() => setShowKey(!showKey)}
              />
            ) : (
              <Eye
                className="w-5 h-5 text-zinc-500"
                onClick={() => setShowKey(!showKey)}
              />
            )}
          </div>
          {error.length > 0 && <p className="text-red-600 text-sm">{error}</p>}

          <button
            onClick={authLogin}
            id="button"
            className="bg-violet-500 py-2 rounded-full mt-6 px-4 font-semibold"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  )
}
