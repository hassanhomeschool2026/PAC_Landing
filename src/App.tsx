import React, { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Header / Navigation */}
      <header>
        <div className="nav-container">
          <div className="brand-logo">
            <h1>PATHWAYS ASSISTANCE CENTER</h1>
            <span>Pathways Dedicated to Helping Others</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Ways We Help</a></li>
            <li><a href="#service-areas">Service Areas</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a 
                href="https://donate.stripe.com/fZudRb5J4dDsew934AgnK00" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-donate-nav"
              >
                DONATE
              </a>
            </li>
          </ul>

          {/* Mobile toggle button */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)}>Ways We Help</a>
            <a href="#service-areas" onClick={() => setMobileMenuOpen(false)}>Service Areas</a>
            <a href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a 
              href="https://donate.stripe.com/fZudRb5J4dDsew934AgnK00" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-donate-nav"
              style={{ textAlign: 'center', marginTop: '6px' }}
            >
              DONATE
            </a>
          </div>
        )}
      </header>

      {/* 2. Hero Section (Matching original photo tone & typography) */}
      <section className="hero">
        <div className="hero-overlay">
          <h2>PATHWAYS ASSISTANCE CENTER</h2>
          <p>Pathways Dedicated to Helping Others</p>
        </div>
      </section>

      {/* 3. Band 1: Who We Are (Original Narrative) */}
      <section id="about" className="section-band-pink">
        <div className="section-container">
          <h2 className="section-title-white">WHO WE ARE</h2>
          <p className="section-subtitle-white">About Us</p>
          <div className="who-we-are-text">
            <p>
              We know what it's like to need a helping hand at least once in our lives. We know that sometimes all it takes to change the world is a little support. Well before our official formation, we were determined to make an impact. The core of our efforts is to provide relief to families and educate, starting at the youth level. Poverty is commonly generational. We strongly believe this cycle is broken when we begin educating and offering support at the children's level.
            </p>
            <br />
            <p>
              We help families because we know personally that children can have difficulties reaching their fullest potential when their family is struggling financially or in other ways. We know that children can be mentally and emotionally affected by these situations, even though they can't quite explain or recognize it. At Pathways Assistance Center we believe in uplifting those that come to us. Some need help and this may be the only time they will in their lives. No need to belittle them. Our focus is making sure children are taken care of and there is one more place to go when the assistance is needed. We understand those needs and feel that everyone deserves to be treated with dignity, respect and entitled to privacy in those times. We are committed to paving paths that strengthens families, communities, our economy and lead to success. Through all of our endeavors, we pray each family's need is temporary and that we boldly display the conviction behind our beliefs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Band 2: Ways We Help (The 3 Active Focus Pillars) */}
      <section id="programs" className="section-band-white">
        <div className="section-container">
          <h2 className="section-title-pink">WAYS WE HELP</h2>
          <p className="section-subtitle-dark">Committed to Making a Positive Impact in the Community</p>

          {/* Row 1: Financial Assistance */}
          <div className="program-row">
            <div className="program-content">
              <h3>SHORT TERM FINANCIAL ASSISTANCE</h3>
              <p>
                We provide short term emergency financial bridge assistance with rent, mortgage, and critical utilities to prevent disconnection and stabilize homes for working families with children.
              </p>
              <a href="#resources" className="program-btn">Learn More</a>
            </div>
            <div className="program-image">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" 
                alt="Financial Assistance Support" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Row 2: Food Assistance */}
          <div className="program-row reverse">
            <div className="program-content">
              <h3>FOOD ASSISTANCE</h3>
              <p>
                We provide grocery assistance and emergency food bridge support to ensure local children and parents have immediate access to fresh, nourishing meals during sudden financial hardships.
              </p>
              <a href="#resources" className="program-btn">Learn More</a>
            </div>
            <div className="program-image">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
                alt="Fresh Food Assistance" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Row 3: Youth Programs */}
          <div className="program-row">
            <div className="program-content">
              <h3>YOUTH PROGRAMS</h3>
              <p>
                We host several age-appropriate, fun-filled, education-packed programs and events for youth ages 8–17 throughout the year. Children are VIP at Pathways Assistance Center and the main reason we are here to do what we do!
              </p>
              <a href="#contact" className="program-btn">Get Involved</a>
            </div>
            <div className="program-image">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80" 
                alt="Youth Reading and Mentoring" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Band 3: Service Areas */}
      <section id="service-areas" className="section-band-pink">
        <div className="section-container">
          <h2 className="section-title-white">SERVICE AREAS</h2>
          <p className="section-subtitle-white">Proudly serving local families across Collin and Dallas counties</p>
          <ul className="service-cities-list">
            <li>• Wylie</li>
            <li>• Murphy</li>
            <li>• Lavon</li>
            <li>• Rockwall</li>
            <li>• Rowlett (75089)</li>
            <li>• Sachse</li>
          </ul>
        </div>
      </section>

      {/* 6. Band 4: Split Grid - Clock & Community Safety-Net Resources */}
      <section id="resources" className="section-band-gray">
        <div className="split-grid">
          <div className="split-image">
            <img 
              src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80" 
              alt="Clock - Assistance Schedules" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="split-content">
            <h3>COMMUNITY RESOURCES</h3>
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '16px' }}>
              Direct financial relief is administered based on active grant and funding cycles. If your family is experiencing an acute emergency or utility crisis, connect immediately with our trusted Collin County safety-net partners:
            </p>
            <ul className="resource-list">
              <li>
                <strong>Assistance Center of Collin County:</strong><br />
                Emergency Rent & Utility Relief • Call <a href="tel:9724221850">(972) 422-1850</a> or visit <a href="https://assistancecenter.org" target="_blank" rel="noopener noreferrer">assistancecenter.org</a>
              </li>
              <li>
                <strong>All Community Outreach (ACO):</strong><br />
                Local Emergency Aid & Pantries • Call <a href="tel:9727279131">(972) 727-9131</a> or visit <a href="https://acocares.org" target="_blank" rel="noopener noreferrer">acocares.org</a>
              </li>
              <li>
                <strong>Texas 2-1-1:</strong><br />
                Statewide 24/7 Crisis Resource Directory • Dial <a href="tel:211">2-1-1</a> or visit <a href="https://www.211texas.org" target="_blank" rel="noopener noreferrer">211texas.org</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Band 5: Contact Information */}
      <section id="contact" className="section-band-pink">
        <div className="section-container contact-details">
          <h2 className="section-title-white">CONTACT PATHWAYS ASSISTANCE CENTER</h2>
          <p style={{ marginTop: '24px' }}>
            5900 Balcones Drive, Suite 165<br />
            Austin, Texas 78731
          </p>
          <p style={{ marginTop: '12px' }}>
            <a href="mailto:info@pathwaysac.org">info@pathwaysac.org</a><br />
            B: (972) 581-9322<br />
            F: (972) 551-4442
          </p>
        </div>
      </section>

      {/* 8. Band 6: Candid / GuideStar Seal */}
      <section className="section-band-white">
        <div className="section-container guidestar-box">
          <h2 className="section-title-pink">GUIDESTAR SEAL</h2>
          <p className="section-subtitle-dark" style={{ marginBottom: '20px' }}>
            This recognition shows commitment to complete transparency and trust!
          </p>
          <div className="candid-badge">
            <strong>Candid. / GuideStar</strong><br />
            Silver Transparency 2025–2026
          </div>
        </div>
      </section>

      {/* 9. Band 7: Donate (Stripe) */}
      <section id="donate" className="section-band-pink">
        <div className="section-container donate-box">
          <h2 className="section-title-white">DONATE</h2>
          <p className="section-subtitle-white" style={{ marginBottom: '8px' }}>
            You can GIVE directly to support our local families and youth programs!
          </p>
          <p style={{ fontSize: '0.95rem', fontWeight: 300 }}>
            We are a 501(c)(3) organization. Your donations are tax-deductible!
          </p>
          <a 
            href="https://donate.stripe.com/fZudRb5J4dDsew934AgnK00" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-stripe-donate"
          >
            Donate Here!
          </a>
        </div>
      </section>

      {/* 10. Footer */}
      <footer>
        <p>© 2026 by Pathways Assistance Center. All Rights Reserved. 501(c)(3) Tax-Exempt Public Charity.</p>
      </footer>
    </>
  );
}
