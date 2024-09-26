import { html, render } from 'lit-html';

export const renderLandingPage = () => {
  let body = html`
    <main>
        <!-- Hero Section -->
      <section class="hero">
          <div class="hero-content">
              <img src="./assets/gambar1.png" alt="Voting Image" class="hero-image">
              <div class="hero-text">
                  <h1>Welcome to Blockchain Voting App</h1>
                  <p>Join the voting revolution using blockchain technology. Easy, safe and transparent.</p>
                  <div class="hero-buttons">
                      <button class="btn-primary">Get Started</button>
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
                  <img src="./assets/gambar2.png" alt="Guaranteed Transparency">
                  <h3>Guaranteed Transparency</h3>
                  <p>Every vote cast is transparently recorded on the blockchain, ensuring tamper-proof results.</p>
              </div>
              <div class="feature-item">
                  <img src="./assets/gambar3.png" alt="High-Level Security">
                  <h3>High-Level Security</h3>
                  <p>Our blockchain technology ensures that voting data and results are protected from security threats.</p>
              </div>
              <div class="feature-item">
                  <img src="./assets/gambar4.png" alt="User-Friendly">
                  <h3>User-Friendly</h3>
                  <p>The user-friendly interface simplifies the voting process and result monitoring.</p>
              </div>
          </div>
      </section>

    </main>
  `;
  render(body, document.getElementById('root'));
};
