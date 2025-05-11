import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppHome from './routes/AppHome';
import CommunityChat from './routes/CommunityChat';
import HeartDiseaseRiskAss from './routes/HeartDiseaseRiskAss';
import DailyHealthWellnessTracker from './routes/DailyHealthWellnessTracker';
import ResourcesArticles from './routes/ResourcesArticles';
import Placeholder from './routes/Placeholder';
import './styles/App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="time">12:00</div>
          <div className="welcome">
            <p>Welcome Back</p>
            <h1>Your First Name</h1>
          </div>
          <div className="profile-icon">👤</div>
        </header>

        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/chat" element={<CommunityChat />} />
          <Route path="/heart-risk" element={<HeartDiseaseRiskAss />} />
          <Route path="/wellness" element={<DailyHealthWellnessTracker />} />
          <Route path="/records" element={<Placeholder title="Your Health Records" />} />
          <Route path="/menstrual" element={<Placeholder title="Menstrual Cycle Tracker" />} />
          <Route path="/mental" element={<Placeholder title="Mental Health" />} />
          <Route path="/vitals" element={<Placeholder title="Vitals" />} />
          <Route path="/other" element={<Placeholder title="Other Tracker" />} />
          <Route path="/resources" element={<ResourcesArticles />} />
          <Route path="/sharing" element={<Placeholder title="Sharing" />} />
          <Route path="/other-tools" element={<Placeholder title="Other Tools" />} />
        </Routes>

        <footer className="bottom-nav">
          <div>
            <Link to="/" className="nav-button">❤️<br />Home</Link>
          </div>
          <div>
            <Link to="/sharing" className="nav-button">👥<br />Sharing</Link>
          </div>
          <div>
            <Link to="/other-tools" className="nav-button">🔢<br />*ÁÝŠÎ≠</Link>
          </div>
        </footer>
      </div>
    </Router>
  );
}