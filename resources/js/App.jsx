import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Library from './pages/Library'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact-us" element={<Contact />} />
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
