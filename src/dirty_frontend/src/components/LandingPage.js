import { html, render } from 'lit-html';
import './styles/landing.css';
import { navigate } from './App';  // Import fungsi navigate

export const renderLandingPage = (navigate) => {
  let body = html`
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Blockchain Voting App</title>
    </head>
    <body>

      <!-- Navbar -->
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>

      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <img src="../../assets/mainpict.png" alt="Voting Image" class="hero-image">
          <div class="hero-text">
            <h1>Welcome to Blockchain Voting App</h1>
            <p>Join the voting revolution using blockchain technology. Easy, safe and transparent.</p>
            <div class="hero-buttons">
              <button class="btn-primary" id="get-started-btn">Get Started</button>
              <button class="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <h2>Features</h2>
        <div class="feature-grid">
          <div class="feature-item">
            <img src="../../assets/shield.png" alt="Guaranteed Transparency" class="hero-image2">
            <h3>Guaranteed Transparency</h3>
            <p>Every vote cast is transparently recorded on the blockchain, ensuring tamper-proof results.</p>
          </div>
          <div class="feature-item">
            <img src="../../assets/glasseye.png" alt="High-Level Security">
            <h3>High-Level Security</h3>
            <p>Our blockchain technology ensures that voting data and results are protected from security threats.</p>
          </div>
          <div class="feature-item">
            <img src="../../assets/userfriendly.png" alt="User-Friendly">
            <h3>User-Friendly</h3>
            <p>The user-friendly interface simplifies the voting process and result monitoring.</p>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="how-it-works">
        <h2>How does it work</h2>
        <div class="steps-grid">
          <div class="step">
            <h3>1. Sign Up and Log In</h3>
            <p>Sign up on our platform and enter the required information to start voting.</p>
          </div>
          <div class="step">
            <h3>2. Select Candidates</h3>
            <p>Browse the candidates and select your choice in the ongoing election.</p>
          </div>
          <div class="step">
            <h3>3. Cast Your Vote</h3>
            <p>Cast your vote through our simple interface and view the results instantly.</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer>
        <div class="logoteam">
          <a href="#"><img src="../../assets/snowlylulu.png" alt="teamimg"></a>
        </div>  
        <div class="social-media">
          <p>Find Us In Social Media</p> 
          <div class="socmed-img">
          <a href="#"><img src="../../assets/logo_instagram.png" alt="Instagram"></a> 
          <a href="#"><img src="../../assets/logo_facebook.png" alt="Facebook"></a>
          <a href="#"><img src="../../assets/logo_linkedin.png" alt="LinkedIn"></a>
          <a href="#"><img src="../../assets/logo_twitter.png" alt="Twitter"></a>
          </div>
        </div>
        <div class="footer-links">
          <div>
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Team</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="#">Blog</a>
            <a href="#">Idea</a>
          </div>
        </div>
      </footer>

    </body>
    </html>
  `;

  //elemen root wajib ada di HTML utama
  render(body, document.getElementById('root'));

  // Tempat event listener setelah rendering
  document.getElementById('get-started-btn').addEventListener('click', () => navigate('dashboard-page'));
};
