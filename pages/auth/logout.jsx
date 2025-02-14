import { useEffect } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

export default function Logout() {
  const supabase = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      await supabase.auth.signOut()
      router.push('/auth/login')
    }

    handleLogout()
  }, [supabase, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-primary text-2xl font-bold">Saindo...</div>
      </div>
    </div>
  )
}
