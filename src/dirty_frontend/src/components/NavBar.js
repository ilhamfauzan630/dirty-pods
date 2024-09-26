import { html, render } from 'lit-html';

export const renderNavBar = (navigate) => {
  let nav = html`
    <nav>
      <button id="nav-home">About</button>
      <button id="nav-election">Contact</button>
      <button id="nav-election">QnA</button>
    </nav>
  `;
  render(nav, document.getElementById('nav'));

  // Add navigation listeners
  document.getElementById('nav-home').addEventListener('click', () => navigate('landing-page'));
  document.getElementById('nav-election').addEventListener('click', () => navigate('election-page'));
};
