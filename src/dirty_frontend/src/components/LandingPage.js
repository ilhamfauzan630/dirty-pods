import { html, render } from 'lit-html';
import logo from '../logo2.svg';

export const renderLandingPage = () => {
  let body = html`
    <main>
      <img src="${logo}" alt="DFINITY logo" />
      <h1>Welcome to the ICP Voting App</h1>
      <p>This is a decentralized voting application using Internet Computer.</p>
    </main>
  `;
  render(body, document.getElementById('root'));
};
