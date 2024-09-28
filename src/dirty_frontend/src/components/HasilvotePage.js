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
      const percentage = (vote / totalVotes) * 100;
      progressBar.style.width = `${percentage}%`;
      progressBar.textContent = `${vote}`;
    });
  };

  let body = html`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Title Vote</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
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
      </div>
      <script>
        updateProgressBar(); // Langsung isi progress bar ketika halaman dimuat
      </script>
    </body>
    </html>
  `;

  render(body, document.getElementById('root'));
};
