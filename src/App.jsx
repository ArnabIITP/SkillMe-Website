



import './App.css';


function App() {
  return (
    <div className="app-container" style={{ background: '#f8f9fb', minHeight: '100vh', fontFamily: 'Inter, Arial, sans-serif', width: '100vw', overflowX: 'hidden' }}>
      {/* Header */}
      <header style={{ background: '#fff', boxShadow: '0 2px 8px #ececec', padding: '0 0 0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70, width: '100vw', maxWidth: '100vw' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/images/skillme-logo.jpg" alt="SkillMe Logo" style={{ width: 38, height: 38, borderRadius: 8, marginRight: 10 }} />
          <span style={{ color: '#8f4fff', fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>SkillMe</span>
        </div>
        <nav style={{ marginRight: 40, display: 'flex', gap: 8 }}>
          <a href="#about" style={{ ...navLinkStyle, borderRadius: 8, padding: '8px 18px', marginLeft: 0, marginRight: 8, background: 'linear-gradient(90deg, #f3e9ff 0%, #f8f9fb 100%)', transition: 'background 0.2s, color 0.2s', fontWeight: 600 }}>About Us</a>
          <a href="#features" style={{ ...navLinkStyle, borderRadius: 8, padding: '8px 18px', marginRight: 8, background: 'linear-gradient(90deg, #f3e9ff 0%, #f8f9fb 100%)', transition: 'background 0.2s, color 0.2s', fontWeight: 600 }}>Features</a>
          <a href="#howitworks" style={{ ...navLinkStyle, borderRadius: 8, padding: '8px 18px', marginRight: 8, background: 'linear-gradient(90deg, #f3e9ff 0%, #f8f9fb 100%)', transition: 'background 0.2s, color 0.2s', fontWeight: 600 }}>How it Works</a>
          <a href="#faq" style={{ ...navLinkStyle, borderRadius: 8, padding: '8px 18px', marginRight: 8, background: 'linear-gradient(90deg, #f3e9ff 0%, #f8f9fb 100%)', transition: 'background 0.2s, color 0.2s', fontWeight: 600 }}>FAQ</a>
          <a href="#contact" style={{ ...navLinkStyle, borderRadius: 8, padding: '8px 18px', background: 'linear-gradient(90deg, #f3e9ff 0%, #f8f9fb 100%)', transition: 'background 0.2s, color 0.2s', fontWeight: 600 }}>Contact</a>
        </nav>
      </header>

      {/* Main Section */}
      <main style={{ width: '100vw', maxWidth: '100vw', padding: '48px 0 0 0', textAlign: 'center' }}>
        <h1 style={{ color: '#8f4fff', fontWeight: 800, fontSize: 48, marginBottom: 12 }}>SkillMe is Coming Soon!</h1>
        <p style={{ color: '#444', fontSize: 20, marginBottom: 8 }}>Unlock your potential by exchanging skills with others.</p>
        <p style={{ color: '#666', fontSize: 17, marginBottom: 38 }}>SkillMe is a platform where you can teach what you know and learn what you want, all in one place.</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between', marginTop: 24, width: '100vw', maxWidth: '100vw', padding: '0 2vw' }}>
          {/* Waitlist Card */}
          <section style={{ ...cardStyle, flex: '1 1 400px', minWidth: 320, maxWidth: '48vw', marginBottom: 24 }}>
            <h2 style={{ color: '#8f4fff', fontWeight: 700, fontSize: 24, marginBottom: 8 }}>Join the Waitlist</h2>
            <p style={{ color: '#444', fontSize: 15, marginBottom: 18 }}>Be among the first to experience the future of skill exchange. First come, first serve!</p>
            <form style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required style={inputStyle} />
              <button type="submit" style={buttonStyle}>Join the Waitlist</button>
            </form>
          </section>

          {/* What is SkillMe Card */}
          <section style={{ ...cardStyle, flex: '1 1 400px', minWidth: 320, maxWidth: '48vw', marginBottom: 24 }}>
            <h2 style={{ color: '#8f4fff', fontWeight: 700, fontSize: 22, marginBottom: 10 }}>What is SkillMe?</h2>
            <ul style={{ color: '#222', textAlign: 'left', fontSize: 16, lineHeight: 1.7, paddingLeft: 20, margin: 0 }}>
              <li>Exchange skills with people around the world</li>
              <li>Teach what you know, learn what you want</li>
              <li>Build your profile and grow your network</li>
              <li>First come, first serve access for early subscribers</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      {/* More Product Details Section */}
      <section style={{ width: '100vw', maxWidth: '100vw', marginTop: 48, padding: '0 2vw 32px 2vw', background: '#f3f2fd', borderRadius: 0 }}>
        <h2 style={{ color: '#8f4fff', fontWeight: 700, fontSize: 32, margin: '32px 0 18px 0', letterSpacing: 1 }}>Why Choose SkillMe?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 32 }}>
          <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#7a3ee6', fontWeight: 700, fontSize: 20 }}>Personalized Learning</h3>
            <p style={{ color: '#444', fontSize: 16 }}>Get matched with people who want to learn what you teach, and teach you what you want to learn. Your journey is unique—so is your learning path.</p>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#7a3ee6', fontWeight: 700, fontSize: 20 }}>Verified Community</h3>
            <p style={{ color: '#444', fontSize: 16 }}>SkillMe ensures a safe and trusted environment. All users are verified, and you can rate and review your learning or teaching experience.</p>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#7a3ee6', fontWeight: 700, fontSize: 20 }}>Flexible Scheduling</h3>
            <p style={{ color: '#444', fontSize: 16 }}>Book sessions at your convenience. Whether you want to learn on weekends or teach after work, SkillMe fits your schedule.</p>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#7a3ee6', fontWeight: 700, fontSize: 20 }}>Track Your Progress</h3>
            <p style={{ color: '#444', fontSize: 16 }}>Monitor your learning and teaching milestones, earn badges, and showcase your achievements on your profile.</p>
          </div>
        </div>
        {/* More product details */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 32, marginTop: 32 }}>
          <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#7a3ee6', fontWeight: 700, fontSize: 20 }}>Skill Exchange Marketplace</h3>
            <p style={{ color: '#444', fontSize: 16 }}>Browse and offer skills in a global marketplace. Find the perfect match for your learning or teaching needs, from coding to cooking and everything in between.</p>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#7a3ee6', fontWeight: 700, fontSize: 20 }}>Seamless Communication</h3>
            <p style={{ color: '#444', fontSize: 16 }}>Chat, schedule, and collaborate with your peers using our built-in messaging and video tools—no need for third-party apps.</p>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#7a3ee6', fontWeight: 700, fontSize: 20 }}>Rewards & Recognition</h3>
            <p style={{ color: '#444', fontSize: 16 }}>Earn points, badges, and certificates as you learn and teach. Climb the SkillMe leaderboard and get recognized for your contributions.</p>
          </div>
          <div style={{ flex: '1 1 300px', minWidth: 260, maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
            <h3 style={{ color: '#7a3ee6', fontWeight: 700, fontSize: 20 }}>Mobile Friendly</h3>
            <p style={{ color: '#444', fontSize: 16 }}>Access SkillMe anytime, anywhere, on any device. Our platform is fully responsive and optimized for mobile use.</p>
          </div>
        </div>
      </section>

      <footer style={{ background: 'linear-gradient(90deg, #f3e9ff 0%, #f8f9fb 100%)', marginTop: 60, boxShadow: '0 -2px 8px #ececec', padding: '32px 0 10px 0', textAlign: 'center', width: '100vw', maxWidth: '100vw', color: '#4b2e83' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 48, marginBottom: 18 }}>
          <div style={{ minWidth: 180, margin: '0 24px' }}>
            <h4 style={{ color: '#8f4fff', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>SkillMe</h4>
            <p style={{ color: '#4b2e83', fontSize: 15, margin: 0 }}>Empowering people to teach, learn, and grow together.</p>
          </div>
          <div style={{ minWidth: 180, margin: '0 24px' }}>
            <h4 style={{ color: '#8f4fff', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Quick Links</h4>
            <a href="#about" style={footerLinkStyle}>About Us</a><br />
            <a href="#features" style={footerLinkStyle}>Features</a><br />
            <a href="#howitworks" style={footerLinkStyle}>How it Works</a><br />
            <a href="#faq" style={footerLinkStyle}>FAQ</a><br />
            <a href="#contact" style={footerLinkStyle}>Contact</a>
          </div>
          <div style={{ minWidth: 180, margin: '0 24px' }}>
            <h4 style={{ color: '#8f4fff', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Contact</h4>
            <p style={{ color: '#4b2e83', fontSize: 15, margin: 0 }}>Email: <a href="mailto:info@skillme.com" style={{ color: '#8f4fff', textDecoration: 'none' }}>info@skillme.com</a></p>
            <p style={{ color: '#4b2e83', fontSize: 15, margin: 0 }}>Support: <a href="mailto:support@skillme.com" style={{ color: '#8f4fff', textDecoration: 'none' }}>support@skillme.com</a></p>
          </div>
          <div style={{ minWidth: 180, margin: '0 24px' }}>
            <h4 style={{ color: '#8f4fff', fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Legal</h4>
            <a href="#privacy" style={footerLinkStyle}>Privacy Policy</a><br />
            <a href="#terms" style={footerLinkStyle}>Terms of Service</a>
          </div>
        </div>
        <div style={{ color: '#888', fontSize: 15, marginTop: 10 }}>&copy; 2025 SkillMe. All rights reserved.</div>
      </footer>
    </div>
  );
}

const navLinkStyle = {
  color: '#222',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: 17,
  marginLeft: 32,
  marginRight: 0,
  padding: '6px 0',
  borderBottom: '2px solid transparent',
  transition: 'border 0.2s',
};

const cardStyle = {
  background: '#fff',
  borderRadius: 24,
  boxShadow: '0 6px 24px #ececec',
  padding: '32px 28px',
  minWidth: 320,
  maxWidth: 370,
  flex: 1,
  marginBottom: 24,
};

const inputStyle = {
  border: 'none',
  borderRadius: 18,
  padding: '12px 18px',
  fontSize: 16,
  boxShadow: '0 2px 8px #ececec',
  outline: 'none',
  width: 180,
  background: '#f8f9fb',
};

const buttonStyle = {
  background: '#8f4fff',
  color: '#fff',
  border: 'none',
  borderRadius: 18,
  padding: '12px 28px',
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 2px 8px #ececec',
  transition: 'background 0.2s',
};

const footerLinkStyle = {
  color: '#8f4fff',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: 16,
  margin: '0 18px',
  padding: '4px 0',
  borderBottom: '2px solid transparent',
  transition: 'border 0.2s',
};

export default App;
