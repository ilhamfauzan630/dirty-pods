import { html, render } from 'lit-html';
import './styles/dashboard.css';


export const renderDashboardPage = (navigate) => {
  let body = html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Election Dashboard</title>
        <link rel="stylesheet" href="style.css">
    </head>
<body>
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
</body>
</html>
  `;

  // Pastikan bahwa elemen root ada di HTML utama Anda
  render(body, document.getElementById('root'));

  document.getElementById('join-btn1').addEventListener('click', () => {
    console.log('Get Started button clicked');
    navigate('detail-page');
  });
};
