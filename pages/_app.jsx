import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createPagesBrowserClient  } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >      
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}

export default MyApp
