// ElectionPage.js

import { html, render } from 'lit-html';
import { dirty_backend } from 'declarations/dirty_backend';

export const renderElectionPage = async (navigate, greeting = '') => {
  let body = html`
    <main>
      <h1>Election Page</h1>
      <form id="vote-form">
        <label for="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Vote</button>
      </form>
      <section id="greeting">${greeting}</section>
      <button id="back-landing">Back to Home</button>
    </main>
  `;
  render(body, document.getElementById('root'));

  // Event listener untuk form submit
  document.getElementById('vote-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const newGreeting = await dirty_backend.greet(name);
    renderElectionPage(navigate, newGreeting); // Re-render dengan greeting baru
  });

  // Event listener untuk tombol Back
  document.getElementById('back-landing').addEventListener('click', () => {
    navigate('/landing-page');
  });
};
