import './App.css'
import { Navbar } from './components/ui/Navbar'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

function Dummy({ name }: { name: string }) {
  return <div className="p-8 text-center text-2xl">{name} Page (Coming Soon)</div>;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions/ai-advisory" element={<Dummy name="AI Advisory" />} />
        <Route path="/solutions/ai-recruitment" element={<Dummy name="AI Recruitment" />} />
        <Route path="/about" element={<Dummy name="About" />} />
        <Route path="/team" element={<Dummy name="Team" />} />
        <Route path="/contact" element={<Dummy name="Contact" />} />
      </Routes>
    </>
  )
}

export default App
