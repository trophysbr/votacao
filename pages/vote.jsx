import { useEffect, useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import VotingForm from '../components/VotingForm'
import { toast } from 'react-hot-toast'

export default function Vote() {
  const supabase = useSupabaseClient()
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const { data, error } = await supabase
          .from('players')
          .select('*')
          .order('name', { ascending: true })

        if (error) throw error

        setPlayers(data)
      } catch (error) {
        toast.error('Erro ao carregar jogadores: ' + error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPlayers()
  }, [supabase])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkBackground">
        <div className="text-highlightBlue text-2xl font-bold">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-darkBackground py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-whiteText text-center mb-6">Votação</h1>
      <VotingForm players={players} />
    </div>
  )
}
