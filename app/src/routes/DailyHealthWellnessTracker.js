import React, { useState } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default function DailyHealthWellnessTracker() {
  const allEntries = [
    { label: 'Body Measurements', icon: '🧍', path: '/body' },
    { label: 'Menstrual Cycle Tracker', icon: '🔁💧', path: '/menstrual' },
    { label: 'Female-Specific Risk Factors', icon: '♀️', path: '/female-risk', isLink: true },
    { label: 'Medications', icon: '💊', path: '/medications' },
    { label: 'Mental Health', icon: '🧠', path: '/mental' },
    { label: 'Movement & Exercise', icon: '🏃', path: '/movement' },
    { label: 'Nutrition', icon: '🍽️', path: '/nutrition' },
    { label: 'Sleep', icon: '🛏️', path: '/sleep' },
    { label: 'Vitals', icon: '❤️‍🩹', path: '/vitals' },
    { label: 'sś%ódńĞįśį', icon: '➕', path: '/other' }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredEntries = allEntries.filter(entry =>
    entry.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="tracker-page">
      <h2 className="page-title">Daily Health & Wellness Tracker</h2>

      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="tracker-list">
        {filteredEntries.map(({ label, icon, path, isLink }, index) => (
          <div key={index} className="tracker-row">
            {isLink ? (
              <Link to={path} className="tracker-link">
                <span className="icon">{icon}</span>
                <span className="label-link">{label}</span>
                <span className="arrow">➤</span>
              </Link>
            ) : (
              <div className="tracker-entry">
                <span className="icon">{icon}</span>
                <span className="label">{label}</span>
                <span className="arrow">➤</span>
              </div>
            )}
          </div>
        ))}

        {filteredEntries.length === 0 && (
          <div style={{ textAlign: 'center', padding: '1rem', color: '#ccc' }}>
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}