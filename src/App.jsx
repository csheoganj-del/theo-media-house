import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import PageTransitionManager from './components/PageTransitionManager';
import Home from './pages/Home';
import Weddings from './pages/Weddings';
import Maternity from './pages/Maternity';
import Hotels from './pages/Hotels';
import Portfolio from './pages/Portfolio';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          
          <main style={{ flexGrow: 1 }}>
            <PageTransitionManager>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/weddings" element={<Weddings />} />
                <Route path="/maternity" element={<Maternity />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* Fallback to home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </PageTransitionManager>
          </main>

          <Footer />

          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/353852258004"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle size={28} style={{ fill: '#fff', color: '#25d366' }} />
          </a>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
