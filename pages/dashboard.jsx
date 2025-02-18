import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import TopPlayersGrid from '../components/TopPlayersGrid'

export default function Dashboard() {
  const session = useSession()
  const router = useRouter()
  const supabase = useSupabaseClient() // Inicializa o cliente Supabase corretamente

  useEffect(() => {
    if (!session) {
      router.push('/auth/login')
    }
  }, [session, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()  // Faz o logout do usuário
    router.push('/auth/login')  // Redireciona para a página de login após o logout
  }

  return (
    <div className="min-h-screen bg-darkBackground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Título com botão de logout ao lado */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-whiteText">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-primaryPink text-white rounded-md hover:bg-hoverPink"
          >
            Logout
          </button>
        </div>

        {/* Seção de Votação */}
        <div className="flex flex-col items-center w-full">
          <div className="bg-darkBackground p-6 rounded-lg shadow w-full max-w-2xl mb-8">
            <h2 className="text-xl font-semibold text-whiteText mb-4">Votação Atual</h2>
            <a
              href="/vote"
              className="inline-block px-6 py-2 bg-highlightBlue text-white rounded-md hover:bg-highlightBlue/90"
            >
              Votar Agora
            </a>
          </div>
        </div>

        {/* Ranking Semanal */}
        <div className="w-full max-w-2xl mx-auto bg-darkBackground p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-whiteText mb-4">Ranking Semanal</h2>
          <div className="flex flex-col gap-4">
            <TopPlayersGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
