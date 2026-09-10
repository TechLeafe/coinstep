import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Platform } from './pages/Platform'
import { Features } from './pages/Features'
import { Build } from './pages/Build'
import { Support } from './pages/Support'
import { About } from './pages/About'
import { Faq } from './pages/Faq'

// Navbar and Footer are rendered once, outside <Routes>, so the
// theme toggle and navigation are consistent on every page — only
// the middle of the page swaps per route.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/features" element={<Features />} />
          <Route path="/build" element={<Build />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
