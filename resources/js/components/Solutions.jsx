import React, { useState } from 'react';
import './Solutions.css';
import { Target, ShieldAlert, Sparkles, TrendingDown, ArrowRight } from 'lucide-react';

const solutionsData = [
  {
    id: 'engagement',
    icon: Target,
    title: 'Improve Engagement',
    description: 'Transform passive learners into active participants. Our VR scenarios demand complete focus, resulting in higher retention rates and practical skill application.',
    stats: 'Up to 4X faster training than classroom setups.'
  },
  {
    id: 'incidents',
    icon: TrendingDown,
    title: 'Reduce Incident Rates',
    description: 'Practice high-risk procedures in a completely safe, controlled zero-risk virtual environment before stepping foot on site.',
    stats: '43% reduction in workplace incidents reported.'
  },
  {
    id: 'compliance',
    icon: ShieldAlert,
    title: 'Ensure True Compliance',
    description: 'Track detailed analytics, eye-tracking, and spatial decision-making to guarantee that your workforce really understands safety protocols, beyond just ticketing a box.',
    stats: '100% auditable digital training trails.'
  },
  {
    id: 'innovate',
    icon: Sparkles,
    title: 'Innovate Frameworks',
    description: 'Ditch the outdated PowerPoint slide decks. Attract and retain top talent by investing in next-generation spatial computing learning frameworks.',
    stats: 'Preferred by 85% of incoming millennial/Gen Z workforce.'
  }
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(solutionsData[0].id);

  return (
    <section className="solutions-section">
      <div className="container">
        <div className="section-badge" style={{ margin: '0 0 2rem 0' }}>
          <span className="badge-text" style={{ paddingLeft: 0 }}>I Want To:</span>
        </div>
        
        <div className="solutions-grid">
          {/* Tabs Sidebar */}
          <div className="solutions-tabs">
            {solutionsData.map((tab) => (
              <button
                key={tab.id}
                className={`solution-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="tab-btn-content">
                  <tab.icon className="tab-icon" size={24} />
                  <span>{tab.title}</span>
                </div>
                {activeTab === tab.id && <ArrowRight className="active-arrow" size={20} />}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="solutions-content-area">
            {solutionsData.map((tab) => (
              <div 
                key={tab.id}
                className={`solution-content-panel glass-card ${activeTab === tab.id ? 'active' : ''}`}
              >
                <div className="panel-inner" cursor-hover="playlist">
                  <tab.icon className="panel-primary-icon" size={48} />
                  <h3 className="panel-title">{tab.title}</h3>
                  <p className="panel-desc">{tab.description}</p>
                  
                  <div className="panel-stats">
                    <div className="stat-highlight"></div>
                    <p>{tab.stats}</p>
                  </div>
                  
                  <button className="btn btn-outline" style={{ marginTop: '2rem' }}>
                    EXPERIENCE NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
