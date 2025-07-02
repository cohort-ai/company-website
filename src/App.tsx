import './App.css'
import { Navbar } from './components/ui/Navbar'
import { Footer } from './components/ui/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ContactPage from './components/ContactPage'
import TeamPage from './components/TeamPage'
import MissionPage from './components/MissionPage'
import AIAdvisoryPage from './components/AIAdvisoryPage'
import AIRecruitmentPage from './components/AIRecruitmentPage'
import { ScrollToTop } from './components/ui/ScrollToTop'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions/ai-advisory" element={<AIAdvisoryPage />} />
        <Route path="/solutions/ai-recruitment" element={<AIRecruitmentPage />} />
        <Route path="/about" element={<Navigate to="/about/mission" replace />} />
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/about/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
