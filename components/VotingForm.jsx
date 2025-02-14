import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

const pointsDistribution = {
  1: 10,
  2: 8,
  3: 6,
  4: 4,
  5: 2,
  disappointment: -10
}

export default function VotingForm({ players }) {
  const supabase = useSupabaseClient()
  const router = useRouter()
  const [selections, setSelections] = useState({})
  const [disappointment, setDisappointment] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSelection = (position, playerId) => {
    setSelections(prev => ({
      ...prev,
      [position]: playerId
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Validate selections
    const positionsFilled = Object.keys(selections).length === 5
    if (!positionsFilled || !disappointment) {
      toast.error('Por favor, complete todas as seleções')
      setLoading(false)
      return
    }

    // Prepare votes
    const votes = Object.entries(selections).map(([position, playerId]) => ({
      player_id: playerId,
      points: pointsDistribution[position],
      week: new Date().toISOString().slice(0, 10) // Current week
    }))

    // Add disappointment vote
    votes.push({
      player_id: disappointment,
      points: pointsDistribution.disappointment,
      week: new Date().toISOString().slice(0, 10)
    })

    try {
      // Insert votes
      const { error } = await supabase
        .from('votes')
        .insert(votes)

      if (error) throw error

      toast.success('Voto registrado com sucesso!')
      router.push('/dashboard')
    } catch (error) {
      toast.error('Erro ao registrar voto: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-primary mb-6">Votação Semanal</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Top 5 Positions */}
        {[1, 2, 3, 4, 5].map(position => (
          <div key={position} className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              {position}º Lugar ({pointsDistribution[position]} pontos)
            </label>
            <select
              value={selections[position] || ''}
              onChange={(e) => handleSelection(position, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            >
              <option value="">Selecione um jogador</option>
              {players.map(player => (
                <option 
                  key={player.id} 
                  value={player.id}
                  disabled={Object.values(selections).includes(player.id)}
                >
                  {player.name}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Disappointment Selection */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Decepção da Semana (-10 pontos)
          </label>
          <select
            value={disappointment || ''}
            onChange={(e) => setDisappointment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            required
          >
            <option value="">Selecione o jogador</option>
            {players.map(player => (
              <option 
                key={player.id} 
                value={player.id}
                disabled={player.id === disappointment}
              >
                {player.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-primary text-white font-medium rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {loading ? 'Enviando voto...' : 'Confirmar Voto'}
        </button>
      </form>
    </div>
  )
}
