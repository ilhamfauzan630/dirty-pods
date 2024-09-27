// import { html, render } from 'lit-html';
// import { dirty_backend } from 'declarations/dirty_backend';
// import logo from './logo2.svg';

// class App {
//   greeting = '';

//   constructor() {
//     this.#render();
//   }

//   #handleSubmit = async (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     this.greeting = await dirty_backend.greet(name);
//     this.#render();
//   };

//   #render() {
//     let body = html`
//       <main>
//         <img src="${logo}" alt="DFINITY logo" />
//         <br />
//         <br />
//         <form action="#">
//           <label for="name">Enter your name: &nbsp;</label>
//           <input id="name" alt="Name" type="text" />
//           <button type="submit">Click Me!</button>
//         </form>
//         <section id="greeting">${this.greeting}</section>
//       </main>
//     `;
//     render(body, document.getElementById('root'));
//     document
//       .querySelector('form')
//       .addEventListener('submit', this.#handleSubmit);
//   }
// }

// export default App;

import { renderLandingPage } from './LandingPage';
import { renderElectionPage } from './ElectionPage';
import { renderDashboardPage } from './DashboardPage';
import { renderDetailvotePage } from './DetailvotePage';


class App {
  constructor() {
    this.#init();
  }

  // Inisialisasi aplikasi dengan merender halaman default
  #init() {
    this.#navigate('landing-page'); // Set LandingPage sebagai halaman pertama
  }

  // Fungsi navigasi untuk berpindah halaman
  #navigate(page) {
    switch (page) {
      case 'landing-page':
        renderLandingPage(this.#navigate.bind(this)); // Berikan fungsi navigasi ke LandingPage
        break;
      case 'election-page':
        renderElectionPage(this.#navigate.bind(this));
        break;
      case 'dashboard-page':
        renderDashboardPage(this.#navigate.bind(this));
        break;
      case 'detail-page':
        renderDetailvotePage(this.#navigate.bind(this));
        break;
      default:
        renderLandingPage(this.#navigate.bind(this));
    }
  }
}


export default App;
