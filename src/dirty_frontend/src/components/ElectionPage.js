import { html, render } from 'lit-html';
import { dirty_backend } from 'declarations/dirty_backend';

export const renderElectionPage = async (greeting = '') => {
  let body = html`
    <main>
      <h1>Election Page</h1>
      <form action="#">
        <label for="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Vote</button>
      </form>
      <section id="greeting">${greeting}</section>
    </main>
  `;
  render(body, document.getElementById('root'));

  // Re-attach form submit event listener
  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const newGreeting = await dirty_backend.greet(name);
    renderElectionPage(newGreeting); // Re-render with the new greeting
  });
};
