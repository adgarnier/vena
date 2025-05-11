import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';

export default function Placeholder({ title }) {
  return (
    <div className="placeholder-page">
      <h2>{title}</h2>
      <p>Coming soon...</p>
    </div>
  );
}