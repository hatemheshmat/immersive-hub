import React, { useEffect, useRef, useState } from 'react';
import { Activity, BarChart3, Bot, Fingerprint, GraduationCap, ScanEye, SlidersHorizontal } from 'lucide-react';
import './AnalyticsPromo.css';

const STUDENTS = [
  {
    name: 'Sarah J.',
    focusLevel: 'High',
    subject: 'Algebra II',
    conceptMastery: 87,
    aiRecommendation:
      'Increasing complexity of polynomial simulations. Next module unlocked.',
    activityFocusMin: 12,
    focusScore: 87,
    peaceTimeMin: 5,
    calmScore: 93,
    theme: {
      grad1: 'rgba(143, 32, 195, 0.24)',
      grad2: 'rgba(5, 204, 244, 0.12)',
      r1: 'rgba(143, 32, 195, 0.30)',
      r2: 'rgba(5, 204, 244, 0.26)',
      r3: 'rgba(143, 32, 195, 0.16)',
    },
  },
  {
    name: 'Noor A.',
    focusLevel: 'Medium',
    subject: 'Geometry',
    conceptMastery: 82,
    aiRecommendation:
      'Recommended practice set with faster feedback loops. Next module unlocked.',
    activityFocusMin: 10,
    focusScore: 82,
    peaceTimeMin: 6,
    calmScore: 90,
    theme: {
      grad1: 'rgba(5, 204, 244, 0.18)',
      grad2: 'rgba(87, 165, 227, 0.12)',
      r1: 'rgba(5, 204, 244, 0.30)',
      r2: 'rgba(87, 165, 227, 0.22)',
      r3: 'rgba(5, 204, 244, 0.14)',
    },
  },
  {
    name: 'Mariam K.',
    focusLevel: 'High',
    subject: 'Biology',
    conceptMastery: 90,
    aiRecommendation:
      'Introduce model-based experiments for stronger retention. Next module unlocked.',
    activityFocusMin: 14,
    focusScore: 90,
    peaceTimeMin: 4,
    calmScore: 92,
    theme: {
      grad1: 'rgba(143, 32, 195, 0.18)',
      grad2: 'rgba(87, 165, 227, 0.14)',
      r1: 'rgba(143, 32, 195, 0.26)',
      r2: 'rgba(87, 165, 227, 0.26)',
      r3: 'rgba(5, 204, 244, 0.16)',
    },
  },
  {
    name: 'Omar S.',
    focusLevel: 'High',
    subject: 'Physics',
    conceptMastery: 88,
    aiRecommendation:
      'Boost momentum reasoning with friction scenarios. Next module unlocked.',
    activityFocusMin: 13,
    focusScore: 88,
    peaceTimeMin: 5,
    calmScore: 91,
    theme: {
      grad1: 'rgba(5, 204, 244, 0.18)',
      grad2: 'rgba(143, 32, 195, 0.12)',
      r1: 'rgba(5, 204, 244, 0.28)',
      r2: 'rgba(143, 32, 195, 0.22)',
      r3: 'rgba(87, 165, 227, 0.16)',
    },
  },
  {
    name: 'Lina R.',
    focusLevel: 'Medium',
    subject: 'Chemistry',
    conceptMastery: 84,
    aiRecommendation:
      'Refine reaction prediction via adaptive molecule mapping. Next module unlocked.',
    activityFocusMin: 11,
    focusScore: 84,
    peaceTimeMin: 6,
    calmScore: 89,
    theme: {
      grad1: 'rgba(87, 165, 227, 0.18)',
      grad2: 'rgba(5, 204, 244, 0.10)',
      r1: 'rgba(87, 165, 227, 0.26)',
      r2: 'rgba(5, 204, 244, 0.24)',
      r3: 'rgba(143, 32, 195, 0.14)',
    },
  },
];

const AGENT_ITEMS = [
  {
    title: 'Behavior Analysis',
    text: 'Real-time tracking of student choices and engagement levels.',
    icon: ScanEye,
  },
  {
    title: 'Learning Profiles',
    text: 'Custom educational roadmaps tailored to individual cognitive strengths.',
    icon: Fingerprint,
  },
  {
    title: 'Adaptive Difficulty',
    text: 'Simulations that scale in complexity based on student performance.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Teacher Insights',
    text: 'Comprehensive dashboards to monitor progress and identify learning gaps.',
    icon: BarChart3,
  },
];

function Meter({ value }) {
  return (
    <div className="meter" aria-hidden>
      <div className="meter-fill" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

const AnalyticsPromo = () => {
  const carouselRef = useRef(null);
  const [activeStudentIndex, setActiveStudentIndex] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let raf = null;

    const updateActive = () => {
      raf = null;
      const wrapRect = el.getBoundingClientRect();
      const centerX = wrapRect.left + wrapRect.width / 2;

      const cards = Array.from(el.querySelectorAll('[data-student-index]'));
      if (!cards.length) return;

      let bestIndex = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      cards.forEach((card) => {
        const idx = Number(card.getAttribute('data-student-index') || 0);
        const r = card.getBoundingClientRect();
        const cardCenterX = r.left + r.width / 2;
        const dist = Math.abs(cardCenterX - centerX);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = idx;
        }
      });

      setActiveStudentIndex(bestIndex);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateActive);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    updateActive();

    return () => {
      el.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="analytics" className="analytics-promo-section">
      <div className="container">
        <div className="analytics-perso-layout">
          <div className="analytics-top">
            <div className="caption-tag">
              <span className="c1 white-60 uppercase">Immersive AI Engine</span>
            </div>

            <h2 className="section-title analytics-title">
              <span className="text-gradient">Personalized</span> Learning <br />
              <span className="text-gradient">Powered</span> by <span className="text-gradient">AI</span>
            </h2>

            <div className="analytics-subhead-row" aria-label="AI agents for students and teachers">
              <div className="analytics-subhead-pill">
                <GraduationCap size={16} aria-hidden />
                Student Agent
              </div>
              <div className="analytics-subhead-pill">
                <Bot size={16} aria-hidden />
                Teacher Agent
              </div>
            </div>

          </div>

          <div className="analytics-body-grid">
            {/* Left column: AI Educational Agent (body paragraph + 2×2 grid) */}
            <div className="agent-stack">
              <div className="agent-intro-text">
                <h3 className="agent-learn-title">Our proprietary AI Educational Agent</h3>
                <p className="agent-learn-desc">
                  Tracks and analyzes learner behavior inside VR simulations, building a custom Learning Profile for each student and surfacing actionable insights for teachers—so no one gets left behind.
                </p>
              </div>

              <div className="agent-grid">
                {AGENT_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="agent-item-card student-card glass-card agent-glass">
                      <div className="agent-item-head">
                        <div className="agent-item-icon" aria-hidden>
                          <Icon size={18} />
                        </div>
                        <div className="agent-item-title">{item.title}</div>
                      </div>
                      <div className="agent-item-text">{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right column: Stats + student cards carousel */}
            <div className="students-right-col">
              <div className="fusion-stats-row" aria-label="Insight Engine summary">
                <div className="fusion-stat glass-card">
                  <div className="fusion-stat-label">Licenses allocated</div>
                  <div className="fusion-stat-value">86</div>
                  <div className="fusion-stat-delta">-10% last 30d</div>
                </div>
                <div className="fusion-stat glass-card">
                  <div className="fusion-stat-label">Total users</div>
                  <div className="fusion-stat-value">120</div>
                  <div className="fusion-stat-delta">+24% last 30d</div>
                </div>
                <div className="fusion-stat glass-card">
                  <div className="fusion-stat-label">VR sessions</div>
                  <div className="fusion-stat-value">180</div>
                  <div className="fusion-stat-delta">+13% last 30d</div>
                </div>
              </div>

              <div className="dashboard-row-head" aria-label="Teacher dashboard preview">
                <div className="dashboard-row-title">Student Reports</div>
                <div className="dashboard-row-meta">Last 30 days</div>
              </div>

              <div
                className="students-carousel-wrap"
                cursor-hover="drag"
                aria-label="Student Activity Carousel"
              >
                <div
                  className="students-carousel"
                  ref={carouselRef}
                >
                  {STUDENTS.map((s, i) => (
                  <div
                    key={s.name}
                    data-student-index={i}
                    className={[
                      'student-card',
                      'glass-card',
                      'personalized-card',
                      i === activeStudentIndex
                        ? 'student-card--active'
                        : Math.abs(i - activeStudentIndex) === 1
                          ? 'student-card--near'
                          : 'student-card--far',
                    ].join(' ')}
                    cursor-hover="service"
                    role="article"
                    aria-label={`${s.name} personalized learning`}
                  >
                    <div className="pc-top">
                      <div className="pc-name c1">{s.name}</div>
                      <div className="pc-focus-pill">Focus: {s.focusLevel}</div>
                    </div>

                    <div className="pc-subject">{s.subject}</div>

                    <div className="pc-concept-row">
                      <div className="pc-concept-label">Concept Mastery</div>
                      <div className="pc-concept-value">{s.conceptMastery}%</div>
                    </div>
                    <Meter value={s.conceptMastery} />

                    <div className="pc-ai-rec">
                      <div className="pc-ai-label">AI Recommendation:</div>
                      <div className="pc-ai-text">{s.aiRecommendation}</div>
                    </div>

                    <div className="pc-metrics">
                      <div className="pc-metric">
                        <div className="pc-metric-row">
                          <div className="pc-metric-label">Activity Focus</div>
                          <div className="pc-metric-value">{s.activityFocusMin}m</div>
                        </div>
                        <div className="pc-metric-row subtle">
                          <div className="pc-metric-label">Focus Score</div>
                          <div className="pc-metric-value">{s.focusScore}%</div>
                        </div>
                      </div>

                      <div className="pc-metric">
                        <div className="pc-metric-row">
                          <div className="pc-metric-label">Peace Time</div>
                          <div className="pc-metric-value">{s.peaceTimeMin}m</div>
                        </div>
                        <div className="pc-metric-row subtle">
                          <div className="pc-metric-label">Calm Score</div>
                          <div className="pc-metric-value">{s.calmScore}%</div>
                        </div>
                      </div>
                    </div>

                    <div className="pc-footer">
                      <Activity size={16} className="pc-footer-icon" />
                      <span>Personalized learning card</span>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPromo;
