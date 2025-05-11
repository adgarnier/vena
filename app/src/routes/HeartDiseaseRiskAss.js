import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported at the top
import '../styles/App.css'; // Reuse existing styles

export default function HeartDiseaseRiskAss() {
  return (
    <div className="card heart-risk" style={{ marginTop: '1rem' }}>
      <h2><a href="#">Heart Disease Risk Assessment</a></h2>

      <div className="risk-block">
        <h3><a href="#">GENESIS-PRAXY Score</a></h3>
        <div className="risk-content">
          <div className="pie-chart">[Chart]</div>
          <ul>
            <li><strong>Masculine</strong> Characteristics</li>
            <li><strong>Masculine/Feminine</strong> Characteristics</li>
            <li><strong>Feminine</strong> Characteristics</li>
          </ul>
          <button className="results-btn">RESULTS ➤</button>
        </div>
      </div>

      <div className="risk-block">
        <h3><a href="#">Framingham Risk Score</a></h3>
        <div className="risk-content">
          <div className="donut-chart">2.4%</div>
          <div>
            <p><strong>2.4%</strong> 10-Year Heart Disease Risk</p>
            <p>ęľ╦≠óÁ┐Ň© Heart Age</p>
            <p><strong>Low</strong> Risk Level</p>
          </div>
          <button className="results-btn">RESULTS ➤</button>
        </div>
      </div>
    </div>
  );
}