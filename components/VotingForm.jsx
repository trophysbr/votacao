import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { FaArrowLeft } from 'react-icons/fa'

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

    const positionsFilled = Object.keys(selections).length === 5
    if (!positionsFilled || !disappointment) {
      toast.error('Por favor, complete todas as seleções')
      setLoading(false)
      return
    }

    const votes = Object.entries(selections).map(([position, playerId]) => ({
      player_id: playerId,
      points: pointsDistribution[position],
      week: new Date().toISOString().slice(0, 10)
    }))

    votes.push({
      player_id: disappointment,
      points: pointsDistribution.disappointment,
      week: new Date().toISOString().slice(0, 10)
    })

    try {
      const { error } = await supabase.from('votes').insert(votes)
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
    <div className="max-w-4xl mx-auto p-6 bg-darkBackground rounded-lg shadow-lg">
      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-whiteText">Votação Semanal</h2>
          <button
            onClick={() => router.push('/dashboard')}
            className="p-2 text-highlightBlue hover:text-hoverPink transition"
          >
            <FaArrowLeft size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {[1, 2, 3, 4, 5].map(position => (
            <div key={position} className="space-y-2">
              <label className="block text-lg font-medium text-whiteText">
                {position}º Lugar ({pointsDistribution[position]} pontos)
              </label>
              <select
                value={selections[position] || ''}
                onChange={(e) => handleSelection(position, e.target.value)}
                className="w-full p-2 border border-secondaryText rounded-md focus:ring-highlightBlue focus:border-highlightBlue bg-[#1E1E1E] text-whiteText"
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

          <div className="space-y-2">
            <label className="block text-lg font-medium text-whiteText">
              Decepção da Semana (-10 pontos)
            </label>
            <select
              value={disappointment || ''}
              onChange={(e) => setDisappointment(e.target.value)}
              className="w-full p-2 border border-secondaryText rounded-md focus:ring-highlightBlue focus:border-highlightBlue bg-[#1E1E1E] text-whiteText"
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
            className="w-full py-3 px-4 bg-highlightBlue text-darkBackground font-medium rounded-md hover:bg-focusGreen focus:outline-none focus:ring-2 focus:ring-highlightBlue focus:ring-offset-2 transition"
          >
            {loading ? 'Enviando voto...' : 'Confirmar Voto'}
          </button>
        </form>
      </div>
    </div>
  )
}