import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import Link from 'next/link'

export default function Login() {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }

  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkBackground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-whiteText">
            Entrar na Votação
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-primaryPink placeholder-secondaryText text-darkBackground focus:outline-none focus:ring-primaryPink focus:border-primaryPink focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-primaryPink placeholder-secondaryText text-darkBackground focus:outline-none focus:ring-primaryPink focus:border-primaryPink focus:z-10 sm:text-sm"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-errorRed text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primaryPink hover:bg-hoverPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryPink"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primaryPink" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-darkBackground text-secondaryText">
                Ou continue com
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={() => handleOAuthLogin('google')}
              className="w-full inline-flex justify-center py-2 px-4 border border-primaryPink rounded-md shadow-sm bg-darkGray text-sm font-medium text-secondaryText hover:bg-darkGray/80"
            >
              <FcGoogle className="h-5 w-5" />
              <span className="ml-2">Google</span>
            </button>
            <button
              onClick={() => handleOAuthLogin('apple')}
              className="w-full inline-flex justify-center py-2 px-4 border border-primaryPink rounded-md shadow-sm bg-darkGray text-sm font-medium text-secondaryText hover:bg-darkGray/80"
            >
              <BsApple className="h-5 w-5" />
              <span className="ml-2">Apple</span>
            </button>
          </div>
        </div>

        <div className="text-center text-sm text-secondaryText">
          Não tem uma conta?{' '}
          <Link href="/auth/signup" className="font-medium text-primaryPink hover:text-hoverPink">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  )
}
