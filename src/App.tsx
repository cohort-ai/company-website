import './App.css'
import { Navbar } from './components/ui/Navbar'
import { Footer } from './components/ui/Footer'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ContactPage from './components/ContactPage'
import TeamPage from './components/TeamPage'

function Dummy({ name }: { name: string }) {
  return <div className="p-8 text-center text-2xl">{name} Page (Coming Soon)</div>;
}

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions/ai-advisory" element={<Dummy name="AI Advisory" />} />
        <Route path="/solutions/ai-recruitment" element={<Dummy name="AI Recruitment" />} />
        <Route path="/about" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
