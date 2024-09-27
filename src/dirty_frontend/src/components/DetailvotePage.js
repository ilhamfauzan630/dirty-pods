import { html, render } from 'lit-html';
import './styles/detailvote.css';

export const renderDetailvotePage = (navigate) => {
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
        <div class="images">
            <div class="image-item">
                <img src="cat1.jpg" alt="Cat 1">
                <span class="number">1</span>
            </div>
            <div class="image-item">
                <img src="cat2.jpg" alt="Cat 2">
                <span class="number">2</span>
            </div>
            <div class="image-item">
                <img src="cat3.jpg" alt="Cat 3">
                <span class="number">2</span>
            </div>
        </div>
        <p>Pilihlah salah satu dari gambar di atas!</p>
        <form>
            <div class="radio-item">
                <input type="radio" id="option1" name="vote" value="1">
                <label for="option1">Lorem ipsum</label>
            </div>
            <div class="radio-item">
                <input type="radio" id="option2" name="vote" value="2">
                <label for="option2">Lorem ipsum</label>
            </div>
            <div class="radio-item">
                <input type="radio" id="option3" name="vote" value="3">
                <label for="option3">Lorem ipsum</label>
            </div>
            <button type="submit">Confirm</button>
        </form>
    </div>
    </div>
</body>
</html>

  `;
  render(body, document.getElementById('root'));

  // EVENT HERE

};
