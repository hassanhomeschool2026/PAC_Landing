import React, { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Header / Streamlined 5-Item Navigation */}
      <header>
        <div className="nav-container">
          <div className="brand-logo">
            {/* Official Logo Brandmark */}
            <div className="brand-logo-img flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" style={{ width: '44px', height: '44px' }} xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#111111" />
                <path d="M6 34C10 24 18 16 34 14" stroke="#e79a9b" strokeWidth="4" strokeLinecap="round" />
                <path d="M12 34C15 27 21 21 34 20" stroke="#f3c2c3" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 3" />
                <circle cx="28" cy="11" r="5" fill="#e79a9b" />
                <path d="M28 8.5C27 7 25 7 24 8.5C23 10 25 12 28 14C31 12 33 10 32 8.5C31 7 29 7 28 8.5Z" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="brand-text">
              <h1>PATHWAYS ASSISTANCE CENTER</h1>
              <span>Pathways Dedicated to Helping Others</span>
            </div>
          </div>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#forms">PAC Forms</a></li>
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

          {/* Mobile hamburger toggle */}
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

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)}>Programs</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a>
            <a href="#forms" onClick={() => setMobileMenuOpen(false)}>PAC Forms</a>
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

      {/* 2. Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h2>PATHWAYS ASSISTANCE CENTER</h2>
          <p>Pathways Dedicated to Helping Others</p>
        </div>
      </section>

      {/* 3. Band 1: Who We Are (Original Narrative) */}
      <section id="about" className="section-band-pink">
        <div className="section-container">
          <h2 className="title-white">WHO WE ARE</h2>
          <p className="subtitle-white">About Us</p>
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

      {/* 4. Band 2: Ways We Help (The 3 Core Pillars) */}
      <section id="programs" className="section-band-white">
        <div className="section-container">
          <h2 className="title-pink">WAYS WE HELP</h2>
          <p className="subtitle-dark">Committed to Making a Positive Impact in the Community</p>

          {/* Pillar 1: Financial Assistance */}
          <div className="program-row">
            <div className="program-content">
              <h3>SHORT TERM FINANCIAL ASSISTANCE</h3>
              <p>
                We provide short term emergency financial bridge assistance with rent/mortgage and critical utilities to prevent disruptions and stabilize homes for local families with children.
              </p>
              <a href="#forms" className="btn-pill-pink">Apply / Inquire</a>
            </div>
            <div className="program-image">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" 
                alt="Financial Assistance" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Pillar 2: Food Assistance */}
          <div className="program-row reverse">
            <div className="program-content">
              <h3>FOOD ASSISTANCE</h3>
              <p>
                We provide grocery assistance and emergency food bridge support to ensure local children and parents have immediate access to fresh, nourishing meals during unexpected hardships.
              </p>
              <a href="#forms" className="btn-pill-pink">Apply / Inquire</a>
            </div>
            <div className="program-image">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
                alt="Fresh Food Assistance" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Pillar 3: Youth Programs */}
          <div className="program-row">
            <div className="program-content">
              <h3>YOUTH PROGRAMS</h3>
              <p>
                We host several age-appropriate, fun-filled, education-packed programs and events for youth ages 8–17 throughout the year. Children are VIP at Pathways Assistance Center and the main reasons why we are here!
              </p>
              <a href="#forms" className="btn-pill-pink">Get Involved</a>
            </div>
            <div className="program-image">
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80" 
                alt="Youth Programs" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Band 3: PAC Forms Hub (Dedicated Forms Destination) */}
      <section id="forms" className="section-band-pink">
        <div className="section-container">
          <h2 className="title-white">PATHWAYS ASSISTANCE CENTER FORMS</h2>
          <p className="subtitle-white">Select a form below to complete your registration or inquiry online.</p>

          <div className="forms-grid">
            {/* Form Button 1: Volunteer Application */}
            <div className="form-hub-card">
              <div>
                <h3>VOLUNTEER APPLICATION</h3>
                <p>Join our volunteer team to support youth mentoring, community outreach, and distribution events.</p>
              </div>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe0y1YYNy5k9GZhItJ4TCBB31tsVJ8o5nC2nRlLNCOfgGB9Sw/viewform" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-hub-action"
              >
                Volunteer Application
              </a>
            </div>

            {/* Form Button 2: Community & Assistance Inquiry */}
            <div className="form-hub-card">
              <div>
                <h3>ASSISTANCE & INQUIRY</h3>
                <p>Submit a direct inquiry for youth programs, emergency grocery bridge aid, or family utility questions.</p>
              </div>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe0y1YYNy5k9GZhItJ4TCBB31tsVJ8o5nC2nRlLNCOfgGB9Sw/viewform" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-hub-action"
              >
                Inquiry Form
              </a>
            </div>

            {/* Form Button 3: Youth Registration / Event RSVP */}
            <div className="form-hub-card">
              <div>
                <h3>YOUTH PROGRAM REGISTRATION</h3>
                <p>Register your children (ages 8–17) for upcoming educational workshops, camps, and seasonal initiatives.</p>
              </div>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe0y1YYNy5k9GZhItJ4TCBB31tsVJ8o5nC2nRlLNCOfgGB9Sw/viewform" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-hub-action"
              >
                Youth Registration
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Band 4: Upcoming Events & Initiatives */}
      <section id="events" className="section-band-white">
        <div className="section-container">
          <h2 className="title-pink">UPCOMING EVENTS & INITIATIVES</h2>
          <p className="subtitle-dark">Paving paths through community education, youth empowerment, and family support</p>

          <div className="events-grid">
            {/* Event 1: Camp Pathways */}
            <div className="event-card">
              <img 
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80" 
                alt="Camp Pathways" 
                className="event-card-img" 
                referrerPolicy="no-referrer"
              />
              <div className="event-card-body">
                <div>
                  <h3>CAMP PATHWAYS: LEADERS WITHIN</h3>
                  <p>Annual summer enrichment and leadership workshop series designed to inspire and equip youth ages 8–17.</p>
                </div>
                <a href="#forms" className="btn-pill-pink">Registration & Info</a>
              </div>
            </div>

            {/* Event 2: Community Bridge Drive */}
            <div className="event-card">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80" 
                alt="Food Bridge Distribution" 
                className="event-card-img" 
                referrerPolicy="no-referrer"
              />
              <div className="event-card-body">
                <div>
                  <h3>COMMUNITY FOOD BRIDGE DISTRIBUTION</h3>
                  <p>Pop-up food support drives providing fresh groceries and nutrition to families experiencing sudden transitions.</p>
                </div>
                <a href="#forms" className="btn-pill-pink">Volunteer / Inquire</a>
              </div>
            </div>

            {/* Event 3: Holiday Family Support */}
            <div className="event-card">
              <img 
                src="https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=600&q=80" 
                alt="Holiday Event" 
                className="event-card-img" 
                referrerPolicy="no-referrer"
              />
              <div className="event-card-body">
                <div>
                  <h3>JOYFUL HOLIDAYS FAMILY EVENT</h3>
                  <p>Bringing dignity and joy to local households through seasonal family blessings and children's support.</p>
                </div>
                <a href="#forms" className="btn-pill-pink">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Band 5: Service Areas */}
      <section id="service-areas" className="section-band-pink">
        <div className="section-container">
          <h2 className="title-white">SERVICE AREAS</h2>
          <p className="subtitle-white">Proudly serving local families across Collin and Dallas counties</p>
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

      {/* 8. Band 6: Split Grid - Clock & Community Safety-Net Resources */}
      <section id="resources" className="section-band-gray">
        <div className="section-container">
          <div className="split-grid">
            <div className="split-image">
              <img 
                src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80" 
                alt="Hours & Assistance Schedules" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="split-content">
              <h3>COMMUNITY RESOURCES</h3>
              <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '16px' }}>
                Direct financial grants are disbursed based on active funding cycles. If your family is facing immediate utility disconnection or housing hardship, connect directly with our Collin County partners:
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
        </div>
      </section>

      {/* 9. Band 7: Contact Information */}
      <section id="contact" className="section-band-pink">
        <div className="section-container contact-details">
          <h2 className="title-white">CONTACT PATHWAYS ASSISTANCE CENTER</h2>
          <p style={{ marginTop: '20px' }}>
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

      {/* 10. Band 8: GuideStar / Candid Seal */}
      <section className="section-band-white">
        <div className="section-container guidestar-box">
          <h2 className="title-pink">GUIDESTAR SEAL</h2>
          <p className="subtitle-dark" style={{ marginBottom: '14px' }}>
            This recognition shows commitment to complete transparency and trust!
          </p>
          <div className="candid-badge">
            <strong style={{ fontSize: '1rem', color: '#111111' }}>Candid. / GuideStar</strong><br />
            Silver Transparency 2025–2026
          </div>
        </div>
      </section>

      {/* 11. Band 9: Donate Section */}
      <section id="donate" className="section-band-pink">
        <div className="section-container donate-box">
          <h2 className="title-white">DONATE</h2>
          <p className="subtitle-white" style={{ marginBottom: '8px' }}>
            You can GIVE directly to support our local families and youth programs!
          </p>
          <p style={{ fontSize: '0.95rem', fontWeight: 300 }}>
            We are a 501(c)(3) organization. Your donations are tax-deductible!
          </p>
          {/* Live Stripe Payment Link */}
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

      {/* 12. Footer */}
      <footer>
        <p>© 2026 by Pathways Assistance Center. All Rights Reserved. 501(c)(3) Tax-Exempt Public Charity.</p>
      </footer>
    </>
  );
}
