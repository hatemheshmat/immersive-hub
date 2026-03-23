import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Library from './pages/Library'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import RefundPolicy from './pages/RefundPolicy'
import axios from 'axios';

// Ensure Axios sends cookies automatically on every request for stateful login
axios.defaults.withCredentials = true;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Check initial auth status
  useEffect(() => {
    axios.get('/api/user')
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route
          path="/admin"
          element={isAuthenticated ? <AdminDashboard setIsAuthenticated={setIsAuthenticated} /> : <AdminLogin setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
