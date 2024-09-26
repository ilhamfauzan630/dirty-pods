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
import { renderNavBar } from './NavBar';

class App {
  constructor() {
    this.#init();
  }

  // Inisialisasi aplikasi dengan merender navbar dan halaman default
  #init() {
    renderNavBar(this.#navigate.bind(this));
    this.#navigate('landing-page'); // default halaman pertama
  }

  // Fungsi navigasi untuk berpindah halaman
  #navigate(page) {
    switch (page) {
      case 'landing-page':
        renderLandingPage();
        break;
      case 'election-page':
        renderElectionPage();
        break;
      default:
        renderLandingPage();
    }
  }
}

export default App;
