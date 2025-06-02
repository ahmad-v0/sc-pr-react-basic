import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroArea from './components/HeroArea.jsx'
import GuideSection from './components/GuideSection.jsx'
import CommunitySection from './components/CommunitySection.jsx'
import Footer from './components/footer.jsx'

function App() {

  return (
    <>
      <HeroArea />
      <GuideSection />
      <CommunitySection />
      <Footer />
    </>
  )
}

export default App
