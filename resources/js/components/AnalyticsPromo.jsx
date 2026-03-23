import React from 'react';
import './AnalyticsPromo.css';
import { BarChart3, PieChart, Activity, ChevronRight } from 'lucide-react';

const AnalyticsPromo = () => {
  return (
    <section className="analytics-promo-section">
      <div className="container">
        <div className="analytics-promo-grid">
          
          {/* Text Content Area */}
          <div className="analytics-text-content">
            <div className="section-badge">
              <span className="badge-text" style={{ paddingLeft: 0 }}>Insight Engine</span>
            </div>
            <h2 className="section-title">
              Data-Driven <span className="text-gradient">VR Training Analytics</span>
            </h2>
            <p className="section-description">
              Move beyond simple completion rates. Immersive Hub captures thousands of data points per second during a VR session—from spatial awareness to reaction times and eye-tracking.
            </p>
            
            <ul className="analytics-features-list">
              <li>
                <div className="feature-icon-wrapper">
                  <Activity size={20} className="feature-icon" />
                </div>
                <span>Real-time biometric & behavioral tracking</span>
              </li>
              <li>
                <div className="feature-icon-wrapper">
                  <BarChart3 size={20} className="feature-icon" />
                </div>
                <span>Comprehensive competency dashboards</span>
              </li>
              <li>
                <div className="feature-icon-wrapper">
                  <PieChart size={20} className="feature-icon" />
                </div>
                <span>Predictive risk & compliance reporting</span>
              </li>
            </ul>
            
            <button className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Explore Analytics <ChevronRight size={18} />
            </button>
          </div>
          
          {/* Visual Dashboard Representation Area */}
          <div className="analytics-visual-content">
            <div className="dashboard-mockup glass-card" cursor-hover="open-case">
              {/* Top Bar */}
              <div className="dashboard-header">
                <div className="window-controls">
                  <span></span><span></span><span></span>
                </div>
                <div className="dashboard-title">System overview</div>
              </div>
              
              {/* Mockup Body */}
              <div className="dashboard-body">
                <div className="mockup-chart-large">
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '40%' }}></div>
                    <div className="bar" style={{ height: '70%' }}></div>
                    <div className="bar" style={{ height: '55%' }}></div>
                    <div className="bar" style={{ height: '90%' }}></div>
                    <div className="bar" style={{ height: '65%' }}></div>
                    <div className="bar" style={{ height: '80%' }}></div>
                    <div className="bar" style={{ height: '100%', background: 'var(--accent-orange)' }}></div>
                  </div>
                </div>
                <div className="mockup-stats-row">
                  <div className="mockup-stat-card">
                    <span className="stat-label">Completion</span>
                    <span className="stat-value">94.2%</span>
                  </div>
                  <div className="mockup-stat-card">
                    <span className="stat-label">Avg. Score</span>
                    <span className="stat-value text-accent">A+</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating element */}
            <div className="floating-metric glass-card" cursor-hover="drag">
              <div className="metric-icon">
                <Activity size={24} color="var(--accent-orange)" />
              </div>
              <div className="metric-info">
                <span className="metric-value">2.4k</span>
                <span className="metric-label">Data Points/sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPromo;
