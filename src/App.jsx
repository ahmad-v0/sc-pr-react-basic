import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroArea from './components/HeroArea.jsx'
import GuideSection from './components/GuideSection.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroArea />
      <GuideSection />
      <Footer />
    </>
  )
}

export default App
