import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { PageTransition } from "./components/PageTransition";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import Musings from "./pages/Musings";
import MusingPost from "./pages/MusingPost";
import Captures from "./pages/Captures";
import About from "./pages/About";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/musings" element={<Musings />} />
            <Route path="/musings/:slug" element={<MusingPost />} />
            <Route path="/captures" element={<Captures />} />
            <Route path="/about" element={<About />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
      <Footer />
    </>
  );
}
