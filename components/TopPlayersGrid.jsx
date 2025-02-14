import { useState, useEffect } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { toast } from 'react-hot-toast'

export default function TopPlayersGrid() {
  const supabase = useSupabaseClient()
  const [players, setPlayers] = useState([])
  const [weeks, setWeeks] = useState([])
  const [selectedWeek, setSelectedWeek] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeeks = async () => {
      try {
        const { data, error } = await supabase
          .from('votes')
          .select('week')
          .order('week', { ascending: false })

        if (error) throw error

        const uniqueWeeks = [...new Set(data.map(vote => vote.week))]
        setWeeks(uniqueWeeks)
        if (uniqueWeeks.length > 0) {
          setSelectedWeek(uniqueWeeks[0])
        }
      } catch (error) {
        toast.error('Erro ao carregar semanas: ' + error.message)
      }
    }

    fetchWeeks()
  }, [supabase])

  useEffect(() => {
    const fetchTopPlayers = async () => {
      if (!selectedWeek) return

      try {
        setLoading(true)
        const { data, error } = await supabase
          .rpc('get_top_players', { week_param: selectedWeek })

        if (error) throw error

        setPlayers(data)
      } catch (error) {
        toast.error('Erro ao carregar jogadores: ' + error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTopPlayers()
  }, [selectedWeek, supabase])

  return (
    <div className="bg-darkBackground p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-whiteText">Ranking Semanal</h2>
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
          className="p-2 border border-highlightBlue rounded-md bg-darkBackground text-whiteText focus:ring-focusGreen focus:border-highlightBlue hover:bg-hoverPink transition"
        >
          {weeks.map(week => (
            <option key={week} value={week} className="bg-darkBackground text-whiteText">
              {new Date(week).toLocaleDateString('pt-BR')}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-8 text-whiteText">Carregando...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <div key={player.id} className="p-4 border border-secondaryText rounded-lg bg-darkBackground shadow-md">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  index === 0 ? 'bg-highlightBlue' : 'bg-primaryPink'
                } text-whiteText font-bold`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-whiteText">{player.name}</h3>
                  <p className="text-sm text-secondaryText">{player.total_points} pontos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
