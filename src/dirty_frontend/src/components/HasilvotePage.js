// HasilvotePage.js

import { html, render } from 'lit-html';
import './styles/hasilvote.css';
import img1 from './../../assets/chimera1.jpg';
import img2 from './../../assets/kucing1.jpg';
import img3 from './../../assets/sad1.jpg';

export const renderHasilvotePage = (navigate) => {
  // Ambil nilai votes dari LocalStorage, jika tidak ada gunakan nilai default [4, 3, 3]
  let votes = JSON.parse(localStorage.getItem('votes')) || [4, 3, 3];

  const updateProgressBar = () => {
    const totalVotes = votes.reduce((a, b) => a + b, 0); // Total vote
    votes.forEach((vote, index) => {
      const progressBar = document.getElementById(`progress-bar-${index}`);
      if (progressBar) {
        const percentage = (vote / totalVotes) * 100;
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${vote}`;
      }
    });
  };

  let body = html`
    <div class="detailpage1">
      <h2>Title Vote</h2>
      <p>Description</p>
      <div class="vote-container">
        <div class="container-section">
          <div class="container-item">
            <img src="${img1}" alt="Cat 1">
            <div class="container-label">Label 1</div>
            <div class="progress-container">
              <div class="progress-bar" id="progress-bar-0"></div>
            </div>
          </div>
          <div class="container-item">
            <img src="${img2}" alt="Cat 2">
            <div class="container-label">Label 2</div>
            <div class="progress-container">
              <div class="progress-bar" id="progress-bar-1"></div>
            </div>
          </div>
          <div class="container-item">
            <img src="${img3}" alt="Cat 3">
            <div class="container-label">Label 3</div>
            <div class="progress-container">
              <div class="progress-bar" id="progress-bar-2"></div>
            </div>
          </div>
        </div>
      </div>
      <button id="back-dashboard">Back to Dashboard</button>
    </div>
  `;

  render(body, document.getElementById('root'));

  // Update progress bar setelah rendering
  updateProgressBar();

  // Event listener untuk tombol Back
  document.getElementById('back-dashboard').addEventListener('click', () => {
    navigate('/dashboard-page');
  });
};
