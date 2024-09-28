// App.js

import { renderLandingPage } from './LandingPage';
import { renderElectionPage } from './ElectionPage';
import { renderDashboardPage } from './DashboardPage';
import { renderDetailvotePage } from './DetailvotePage';
import { renderHasilvotePage } from './HasilvotePage';

class App {
  constructor() {
    this.#init();
  }

  // Inisialisasi aplikasi dengan setup event listeners dan router
  #init() {
    this.#setupEventListeners();
    this.#router(); // Render halaman awal berdasarkan URL
  }

  // Setup event listeners untuk link navigasi dan popstate
  #setupEventListeners() {
    // Menangani klik pada link navigasi dengan atribut data-link
    document.body.addEventListener('click', (event) => {
      const link = event.target.closest('a[data-link]');
      if (link) {
        event.preventDefault();
        const href = link.getAttribute('href');
        this.#navigate(href);
      }
    });

    // Menangani event popstate untuk tombol Back/Forward
    window.addEventListener('popstate', () => this.#router());
  }

  // Fungsi navigasi untuk berpindah halaman
  #navigate(path) {
    // Menambahkan entri baru ke history
    window.history.pushState({}, '', path);
    this.#router();
  }

  // Router yang menentukan halaman yang akan dirender berdasarkan path
  #router() {
    const path = window.location.pathname;
    switch (path) {
      case '/':
      case '/landing-page':
        renderLandingPage(this.#navigate.bind(this));
        break;
      case '/election-page':
        renderElectionPage(this.#navigate.bind(this));
        break;
      case '/dashboard-page':
        renderDashboardPage(this.#navigate.bind(this));
        break;
      case '/detailvote-page':
        renderDetailvotePage(this.#navigate.bind(this));
        break;
      case '/hasilvote-page':
        renderHasilvotePage(this.#navigate.bind(this));
        break;
      default:
        renderLandingPage(this.#navigate.bind(this)); // Default ke LandingPage jika rute tidak dikenali
    }
  }
}

export default App;
