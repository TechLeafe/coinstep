import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Home page disabled
// import { Home } from "./pages/Home";

import { Features } from "./pages/Features";
import { Build } from "./pages/Build";
import { Support } from "./pages/Support";
import { About } from "./pages/About";
import { Faq } from "./pages/Faq";
import { Platform } from "./pages/Platform";

export default function App() {
  const location = useLocation();

  const isAboutPage =
    location.pathname === "/about";

  // Scroll to top whenever route changes
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

          {/* Open Platform when website starts at "/" */}
          <Route
            path="/"
            element={
              <Navigate
                to="/platform"
                replace
              />
            }
          />

          {/* PLATFORM */}
          <Route
            path="/platform"
            element={<Platform />}
          />

          {/* FEATURES */}
          <Route
            path="/features"
            element={<Features />}
          />

          {/* BUILD */}
          <Route
            path="/build"
            element={<Build />}
          />

          {/* SUPPORT */}
          <Route
            path="/support"
            element={<Support />}
          />

          {/* FAQ */}
          <Route
            path="/faq"
            element={<Faq />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

        </Routes>
      </main>

      {/* Footer shows on all pages except About */}
      {!isAboutPage && <Footer />}
    </>
  );
}