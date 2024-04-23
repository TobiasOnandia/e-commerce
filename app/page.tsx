import Header from './components/Header'
import { Main } from './components/main'

export default function Home () {
  return (
    <main className="h-screen bg-white">
      <Header/>
      <Main />
    </main>
  )
}
