import Provider from './Providers/Providers'
import Header from './components/Header'
import { Slider } from './components/Slider'
import { Main } from './components/main'

export default function Home() {
  return (
    <main className="h-screen bg-white">
      <Provider>
        <Header />
      </Provider>
      <Main />
    </main>
  )
}
