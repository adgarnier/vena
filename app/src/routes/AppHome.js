import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../styles/App.css';

export default function AppHome() {
  return (
    <main>
      {/* Community Chat Section */}
      <section className="card community-chat">
        <div className="card-header">
            <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ textDecoration: 'underline', color: 'blue' }}>Community Chat ➤</h2>
            </Link>
            <span>Today</span>
        </div>

        <div className="chat-entry">
            <div className="avatar yellow" />
            <div className="chat-info">
            <strong>Fellow Member #1</strong>
            <p>3 new messages • 1h</p>
            </div>
        </div>
        <div className="chat-entry">
            <div className="avatar green" />
            <div className="chat-info">
            <strong>Fellow Member #2</strong>
            <p>Ę╣≠Š┐ ≠Îĺó╡≠Î • 2h</p>
            </div>
        </div>
      </section>

      {/* Heart Disease Risk Section */}
      <section className="card heart-risk">
        <Link to="/heart-risk" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ textDecoration: 'underline', color: 'blue' }}>
            Heart Disease Risk Assessment ➤
            </h2>
        </Link>

        <div className="risk-block">
            <h3>GENESIS-PRAXY Score</h3>
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
            <h3>Framingham Risk Score</h3>
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
      </section>

      {/* Daily Health & Wellness Tracker */}
      <section className="card wellness-tracker">
        <Link to="/wellness" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ textDecoration: 'underline', color: 'blue' }}>
            Daily Health & Wellness Tracker ➤
            </h2>
        </Link>

        <Link to="/records" className="tracker-entry">
          <span className="icon">🩺</span>
          <span className="label">Your Health Records</span>
          <span className="arrow">➤</span>
        </Link>

        <Link to="/menstrual" className="tracker-entry">
          <span className="icon">🔁💧</span>
          <span className="label">Menstrual Cycle Tracker</span>
          <span className="arrow">➤</span>
        </Link>

        <Link to="/mental" className="tracker-entry">
          <span className="icon">🧠</span>
          <span className="label">Mental Health</span>
          <span className="arrow">➤</span>
        </Link>

        <Link to="/vitals" className="tracker-entry">
          <span className="icon">❤️‍🩹</span>
          <span className="label">Vitals</span>
          <span className="arrow">➤</span>
        </Link>

        <Link to="/other" className="tracker-entry">
          <span className="icon">➕</span>
          <span className="label">sś%ódńĞįśį</span>
          <span className="arrow">➤</span>
        </Link>
      </section>

      {/* Resources & Articles */}
      <section className="card resources-section">
        <Link to="/resources" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2 style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'underline', color: 'blue' }}>
            Resources & Articles ➤
            </h2>
        </Link>

        {/* Article 1 */}
        <div className="article-card">
            <p style={{ fontSize: '0.9rem' }}>
            <a href="https://doi.org/10.1016/j.jacadv.2023.100794" target="_blank" rel="noopener noreferrer">
                JACC Adv. 2023 Dec 22;3(2):100794. doi: 10.1016/j.jacadv.2023.100794 ↗
            </a>
            </p>
            <h3>
            Psychological Distress and the Risk of Adverse Cardiovascular Outcomes in Patients With Coronary Heart Disease
            </h3>
            <p className="article-summary">
            <a href="#">
                People with heart disease who experience more psychological distress have a higher risk of serious heart
                problems, and measuring stress helps better predict these risks.
            </a>
            </p>
        </div>

        {/* Article 2 */}
        <div className="article-card image-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Women_silhouettes.svg/1024px-Women_silhouettes.svg.png" alt="Silhouettes" />
            <p className="article-summary">
            <a href="#">
                <strong>Women’s Risk Factors</strong><br />
                Women face unique risk factors for heart disease and stroke at different points in their lives.
                Now is the time to know your risks!
            </a>
            </p>
        </div>

        {/* Article 3 */}
        <div className="article-card">
            <p className="article-tag">JOURNAL ARTICLE</p>
            <h3>
            Heterogeneity of coronary vascular function and myocardial oxygenation in women with angina and non-obstructive coronary artery disease
            </h3>
            <p style={{ fontSize: '0.9rem' }}>
            <a href="https://doi.org/10.1093/ehjci/jeae076" target="_blank" rel="noopener noreferrer">
                European Heart Journal – Cardiovascular Imaging, Volume 25, Issue 8, August 2024, Pages 1136–1143 ↗
            </a>
            <br />
            <strong>Published:</strong> 28 March 2024
            </p>
        </div>
        </section>

    </main>
  );
}