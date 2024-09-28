// LandingPage.js

import { html, render } from 'lit-html';
import './styles/landing.css';

import imgvote from './../../assets/mainpict.png';
import shield from './../../assets/shield.png';
import glasseye from './../../assets/glasseye.png';
import userfriendly from './../../assets/userfriendly.png';
import snowlylulu from './../../assets/snowlylulu.png';
import fb from './../../assets/logo_facebook.png';
import twitter from './../../assets/logo_twitter.png';
import instagram from './../../assets/logo_instagram.png';
import linkedIn from './../../assets/logo_linkedin.png';

export const renderLandingPage = (navigate) => {
  let body = html`
    <!-- Navbar -->
    <nav>
      <ul>
        <li><a href="#" data-link>About</a></li>
        <li><a href="#" data-link>Contact</a></li>
        <li><a href="#" data-link>FAQ</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <img src="${imgvote}" alt="Voting Image" class="hero-image">
        <div class="hero-text">
          <h1>Welcome to Blockchain Voting App</h1>
          <p>Join the voting revolution using blockchain technology. Easy, safe and transparent.</p>
          <div class="hero-buttons">
            <button class="btn-primary" id="get-started-btn">Get Started</button>
            <button class="btn-secondary" id="more-info-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>Features</h2>
      <div class="feature-grid">
        <div class="feature-item">
          <img src="${glasseye}" alt="Guaranteed Transparency" class="hero-image2">
          <h3>Guaranteed Transparency</h3>
          <p>Every vote cast is transparently recorded on the blockchain, ensuring tamper-proof results.</p>
        </div>
        <div class="feature-item">
          <img src="${shield}" alt="High-Level Security">
          <h3>High-Level Security</h3>
          <p>Our blockchain technology ensures that voting data and results are protected from security threats.</p>
        </div>
        <div class="feature-item">
          <img src="${userfriendly}" alt="User-Friendly">
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
        <a href="#"><img src="${snowlylulu}" alt="teamimg"></a>
      </div>  
      <div class="social-media">
        <p>Find Us In Social Media</p> 
        <div class="socmed-img">
          <a href="#"><img src="${instagram}" alt="Instagram"></a> 
          <a href="#"><img src="${fb}" alt="Facebook"></a>
          <a href="#"><img src="${linkedIn}" alt="LinkedIn"></a>
          <a href="#"><img src="${twitter}" alt="Twitter"></a>
        </div>
      </div>
      <div class="footer-links">
        <div>
          <h4>Company</h4>
          <a href="#" data-link>About Us</a>
          <a href="#" data-link>Team</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="#" data-link>Blog</a>
          <a href="#" data-link>Idea</a>
        </div>
      </div>
    </footer>
  `;

  render(body, document.getElementById('root'));

  // Tempat event listener setelah rendering
  document.getElementById('get-started-btn').addEventListener('click', () => {
    console.log('Get Started button clicked');
    navigate('/dashboard-page');
  });

  document.getElementById('more-info-btn').addEventListener('click', () => {
    console.log('More Info button clicked');
    navigate('/detailvote-page');
  });

  // Tambahkan event listener untuk link navigasi internal lainnya
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      navigate(href);
    });
  });
};
