// DashboardPage.js

import { html, render } from 'lit-html';
import './styles/dashboard.css';

export const renderDashboardPage = (navigate) => {
    let body = html`
    <div class="dashboard-container">
      <header>
        <div class="user-info">
          <p>Welcome, Snowylulu</p>
          <p class="role">Dashboard</p>
        </div>
        <div class="profile-icon">
          <img src="profile-icon.png" alt="Profile Icon">
        </div>
      </header>

      <div class="time-container">
        <h2>11:18 PM</h2>
        <p>Saturday, September 2024</p>
      </div>

      <div class="search-container">
        <input type="text" placeholder="Start searching here...">
        <button><img src="search-icon.png" alt="Search"></button>
      </div>

      <section class="ongoing-election">
        <h3>Ongoing Election</h3>
        <div class="sort">
          <button>Newest</button>
        </div>
        <div class="votes-container">
          <!-- Repeat this block for multiple votes -->
          <div class="vote-card">
            <p class="vote-title">[Title Vote]</p>
            <p class="vote-tags">#tag #tag #tag</p>
            <p class="vote-end">End: 27 Sept 2024, 10:29 PM</p>
            <button class="join-btn" id="join-btn1">Join Vote</button>
            <p class="voter-count">👥 78</p>
          </div>
          <!-- Repeat end -->
        </div>
      </section>
    </div>
  `;

    render(body, document.getElementById('root'));

    document.getElementById('join-btn1').addEventListener('click', () => {
        console.log('Join Vote button clicked');
        navigate('/detailvote-page');
    });
};
