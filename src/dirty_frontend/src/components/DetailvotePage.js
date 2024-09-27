import { html, render } from 'lit-html';
import './styles/detailvote.css';
import img1 from './../../assets/chimera1.jpg';
import img2 from './../../assets/kucing1.jpg';
import img3 from './../../assets/sad1.jpg';

export const renderDetailvotePage = (navigate) => {
  let selectedVote = null; // Variabel untuk menyimpan nilai vote yang dipilih

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
                    <img src="${img1}" alt="Cat 1">
                    <span class="number">1</span>
                </div>
                <div class="image-item">
                    <img src="${img2}" alt="Cat 2">
                    <span class="number">2</span>
                </div>
                <div class="image-item">
                    <img src="${img3}" alt="Cat 3">
                    <span class="number">3</span>
                </div>
            </div>
            <p>Pilihlah salah satu dari gambar di atas!</p>
            <br/><br/>
            <section class="radio-section">
                <div class="radio-list">
                    <div class="radio-item"><input name="radio" id="radio1" type="radio" value="1"><label for="radio1">VOTE 1</label></div>
                    <div class="radio-item"><input name="radio" id="radio2" type="radio" value="2"><label for="radio2">VOTE 2</label></div>
                    <div class="radio-item"><input name="radio" id="radio3" type="radio" value="3"><label for="radio3">VOTE 3</label></div>
                </div>
            </section>
            </div>
            <div class="hmmbutton">
                <button type="submit" id="viewhasil">View</button>
                <button type="submit" id="confirm-vote">Confirm</button>
            </div>
        </div>
    </body>
    </html>
  `;
  
  render(body, document.getElementById('root'));

  // Event listener untuk tombol View
  document.getElementById('viewhasil').addEventListener('click', () => {
    navigate('hasil-page');
  });

  // Event listener untuk tombol Confirm
  document.getElementById('confirm-vote').addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="radio"]:checked');
    
    if (selectedRadio) {
      selectedVote = parseInt(selectedRadio.value) - 1; // Mengurangi 1 karena index array dimulai dari 0
      
      // Menyimpan nilai ke LocalStorage
      let storedVotes = JSON.parse(localStorage.getItem('votes')) || [4, 3, 3]; // Nilai default
      storedVotes[selectedVote] += 1; // Tambah vote
      localStorage.setItem('votes', JSON.stringify(storedVotes));
      
      // Menampilkan alert sukses
      alert('Vote berhasil disimpan!');
      
      // Mengarahkan ke halaman hasil
      navigate('hasil-page');
    } else {
      alert('Silakan pilih salah satu opsi sebelum submit.');
    }
  });
};
