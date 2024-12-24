import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import RequireAuth from './components/auth/RequireAuth';
import RequireProfile from './components/auth/RequireProfile';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Merch from './pages/Merch';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Account from './pages/Account';
import Confirmation from './pages/Confirmation';
import CheckEmail from './pages/CheckEmail';
import EmailConfirmation from './pages/EmailConfirmation';
import ProfileSetup from './pages/ProfileSetup';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-[#f5f0eb]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile-setup" element={
              <RequireAuth>
                <ProfileSetup />
              </RequireAuth>
            } />
            <Route 
              path="/account" 
              element={
                <RequireAuth>
                  <RequireProfile>
                    <Account />
                  </RequireProfile>
                </RequireAuth>
              } 
            />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/check-email" element={<CheckEmail />} />
            <Route path="/email-confirmation" element={<EmailConfirmation />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;