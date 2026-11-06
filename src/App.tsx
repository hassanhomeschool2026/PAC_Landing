import React, { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="top">
      {/* 1. Header / Navigation Bar */}
      <header style={{ padding: '12px 32px', overflow: 'visible', height: 'auto', maxHeight: 'none' }}>
        <div 
          className="nav-container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'visible', height: 'auto', maxHeight: 'none' }}
        >
          <a href="#top" className="brand-logo" aria-label="Pathways Assistance Center Home">
            <div style={{ display: 'flex', alignItems: 'center', minWidth: '200px' }}>
              <img 
                src="/assets/aistudio/PAC_LogoVertical.png" 
                alt="Pathways Assistance Center" 
                className="h-20 w-auto max-h-none max-w-none shrink-0"
                style={{ 
                  height: '80px', 
                  width: 'auto', 
                  maxHeight: 'none', 
                  maxWidth: 'none', 
                  objectFit: 'contain', 
                  display: 'block' 
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/assets/aistudio/PAC_LogoHorizon.png';
                  }
                }}
              />
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#top">HOME</a></li>
            <li><a href="/programs-events.html">PROGRAMS/EVENTS</a></li>
            <li><a href="/forms.html">PAC FORMS</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li>
              <a 
                href="#donate" 
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
            <a href="#top" onClick={() => setMobileMenuOpen(false)}>HOME</a>
            <a href="/programs-events.html" onClick={() => setMobileMenuOpen(false)}>PROGRAMS/EVENTS</a>
            <a href="/forms.html" onClick={() => setMobileMenuOpen(false)}>PAC FORMS</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
            <a 
              href="#donate" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-donate-nav"
              style={{ textAlign: 'center', marginTop: '6px' }}
            >
              DONATE
            </a>
          </div>
        )}
      </header>

      {/* Item 1: Hero Section */}
      <section 
        className="hero"
        style={{
          background: "url('/assets/aistudio/PAC_Hero.png') center 30% / cover no-repeat"
        }}
      >
        <div className="hero-overlay">
          <h1 
            className="hero-title"
            style={{
              color: '#111111',
              fontWeight: 600,
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            PATHWAYS ASSISTANCE CENTER
          </h1>
        </div>
      </section>

      {/* Item 2: Band 1 (Pink #e79a9b): Who We Are - About Us */}
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

      {/* Item 3: Band 2 (White): Ways We Help */}
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
              <a href="/programs-events.html" className="btn-pill-pink">View Programs & Events</a>
            </div>
            <div className="program-image">
              <img 
                src="/assets/aistudio/PAC_FinanAssist.png" 
                alt="Short Term Financial Assistance" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/assets/PAC_FinanAssist.png';
                  }
                }}
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
              <a href="/programs-events.html" className="btn-pill-pink">View Programs & Events</a>
            </div>
            <div className="program-image">
              <img 
                src="/assets/aistudio/PAC_FoodAssist.png" 
                alt="Food Assistance Bridge" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/assets/PAC_FoodAssist.png';
                  }
                }}
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
              <a href="/programs-events.html" className="btn-pill-pink">View Programs & Events</a>
            </div>
            <div className="program-image">
              <img 
                src="/assets/aistudio/PAC_Youth.png" 
                alt="Youth Programs" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/assets/PAC_Youth.png';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Item 4: Band 3 (Pink #e79a9b): Service Areas */}
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

      {/* Item 5: Band 4 (Light Neutral Split Row): Hours of Operation */}
      <section id="hours" className="section-band-gray">
        <div className="section-container">
          <div className="split-grid">
            <div className="split-image">
              <img 
                src="/assets/PAC_Clock.png" 
                alt="Hours of Operation Clock" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = '/assets/aistudio/PAC_Clock.png';
                  }
                }}
              />
            </div>
            <div className="split-content">
              <h3 className="hours-title">HOURS OF OPERATION</h3>
              <ul className="hours-schedule-list">
                <li><span className="day-name">Sunday:</span> <span className="day-hours closed">Closed</span></li>
                <li><span className="day-name">Monday:</span> <span className="day-hours closed">Closed</span></li>
                <li><span className="day-name">Tuesday:</span> <span className="day-hours open">9:00 AM – 1:00 PM</span></li>
                <li><span className="day-name">Wednesday:</span> <span className="day-hours open">9:00 AM – 1:00 PM</span></li>
                <li><span className="day-name">Thursday:</span> <span className="day-hours closed">Closed</span></li>
                <li><span className="day-name">Friday:</span> <span className="day-hours closed">Closed</span></li>
                <li><span className="day-name">Saturday:</span> <span className="day-hours closed">Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Item 6: Band 5 (White): GuideStar Seal */}
      <section className="section-band-white">
        <div className="section-container guidestar-box">
          <h2 className="title-pink">GUIDESTAR SEAL</h2>
          <p className="subtitle-dark" style={{ marginBottom: '20px' }}>
            This recognition shows commitment to complete transparency and trust!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
            <a 
              aria-label="Pathways Assistance Center" 
              href="https://app.candid.org/profile/9922530/pathways-assistance-center-85-2971175/?pkId=a99ce759-1cc3-4d71-a3a0-097782ebb483" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'inline-block' }}
            > 
              <img 
                alt="Pathways Assistance Center Candid Profile" 
                src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/9922530/svg" 
                style={{ maxWidth: '160px', height: 'auto', display: 'block' }} 
              />
            </a>
          </div>
        </div>
      </section>

      {/* Item 7: Band 6 (Pink #e79a9b): Donate Section */}
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

      {/* Footer: Contact Details */}
      <footer id="contact" className="site-footer">
        <div className="footer-container">
          <div className="footer-contact-block">
            <h3>PATHWAYS ASSISTANCE CENTER</h3>
            <p className="footer-address">
              5900 Balcones Drive, Suite 165<br />
              Austin, TX 78731
            </p>
            <p className="footer-meta">
              <a href="mailto:info@pathwaysac.org">info@pathwaysac.org</a> • <a href="tel:9725819322">972.581.9322</a>
            </p>
          </div>
          <div className="footer-divider" />
          <p className="footer-copyright">
            © 2026 by Pathways Assistance Center. All Rights Reserved. 501(c)(3) Tax-Exempt Public Charity.
          </p>
        </div>
      </footer>
    </div>
  );
}
