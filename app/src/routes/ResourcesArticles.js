import React from 'react';
import '../styles/App.css';

export default function ResourcesArticles() {
  return (
    <div className="resources-page">
      <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
        Resources & Articles
      </h2>

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
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Women_silhouettes.svg/1024px-Women_silhouettes.svg.png"
          alt="Silhouettes"
        />
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
            European Heart Journal – Cardiovascular Imaging, August 2024 ↗
          </a>
          <br />
          <strong>Published:</strong> 28 March 2024
        </p>
      </div>
    </div>
  );
}