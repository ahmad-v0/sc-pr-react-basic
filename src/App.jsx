import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroArea from './components/HeroArea.jsx'
import Container from './components/Container.jsx'
import Header from './components/Header'
import Name from './components/Name'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroArea />
      <Footer />
    </>
  )
}

export default App
