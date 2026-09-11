import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Platform } from "./pages/Platform";
import { Features } from "./pages/Features";
import { Build } from "./pages/Build";
import { Support } from "./pages/Support";
import { About } from "./pages/About";
import { Faq } from "./pages/Faq";

export default function App() {
  const location = useLocation();

  const isAboutPage =
    location.pathname === "/about";

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <main>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
=======

          <Route
            path="/"
            element={<Home />}
          />

>>>>>>> 9a7b6192e4848816d8f2d87a118ee3acc43d8f19
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
            path="/faq"
            element={<Faq />}
          />
          <Route
            path="/about"
            element={<About />}
          />
<<<<<<< HEAD
=======
          
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/features" element={<Features />} />
          <Route path="/build" element={<Build />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
>>>>>>> 9a7b6192e4848816d8f2d87a118ee3acc43d8f19
        </Routes>
      </main>

      {/* Footer shows on all pages except About */}
      {!isAboutPage && <Footer />}
    </>
<<<<<<< HEAD
  );
}
=======
  )
}
>>>>>>> 9a7b6192e4848816d8f2d87a118ee3acc43d8f19
