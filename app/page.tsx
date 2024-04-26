import Header from './components/Header'
import { Main } from './components/main'
import { SessionProvider } from 'next-auth/react'

export default function Home () {
  return (
    <main className="h-screen bg-white">
        <Header/>
        <Main />
    </main>
  )
}
