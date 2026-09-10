import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { Platform } from './pages/Platform'
import { Features } from './pages/Features'
import { Build } from './pages/Build'
import { Support } from './pages/Support'
import { About } from './pages/About'
import { Faq } from './pages/Faq'


export default function App() {

  const location = useLocation()

  const isAboutPage =
    location.pathname === '/about'


  return (
    <>
      <Navbar />

      <main>

        <Routes>
<<<<<<< HEAD

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/platform"
            element={<Platform />}
          />

          <Route
            path="/features"
            element={<Features />}
          />

          <Route
            path="/build"
            element={<Build />}
          />

          <Route
            path="/support"
            element={<Support />}
          />

          <Route
            path="/about"
            element={<About />}
          />

=======
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/features" element={<Features />} />
          <Route path="/build" element={<Build />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
>>>>>>> d54f0148bbe65344f459c92509175cefbc413143
        </Routes>

      </main>


      {/* Footer shows on other pages,
          but NOT on About page */}

      {!isAboutPage && <Footer />}
    </>
<<<<<<< HEAD
  )
}
=======
  );
}
>>>>>>> d54f0148bbe65344f459c92509175cefbc413143
