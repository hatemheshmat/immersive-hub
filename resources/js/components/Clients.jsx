import React, { useEffect, useRef } from 'react';
import './Clients.css';
import { Star } from 'lucide-react';

// Using actual high-quality SVGs (placeholders that look good monochrome)
const CLIENT_LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
];

const Clients = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Simple clone for infinite scroll effect
    if (marqueeRef.current && marqueeRef.current.children.length === CLIENT_LOGOS.length) {
      const content = marqueeRef.current.innerHTML;
      marqueeRef.current.innerHTML = content + content;
    }
  }, []);

  return (
    <section className="clients-section section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        <div className="caption-tag">
            <span className="c1 white-60">TRUSTED BY INDUSTRY LEADERS</span>
        </div>
        
        <h2 className="h2 white" style={{ marginBottom: '4rem' }}>
          Powering immersive training<br />for forward-thinking teams.
        </h2>

        <div className="clients-marquee-wrapper" cursor-hover="drag">
          <div className="clients-marquee" ref={marqueeRef}>
            {CLIENT_LOGOS.map((logo, index) => (
              <div key={index} className="client-logo-item">
                <img src={logo} alt={`Client ${index}`} className="client-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
