import { html, render } from 'lit-html';

export const renderFooter = () => {
  let footer = html`
        <div class="social-media">
            <p>Find Us In Social Media</p>
            <a href="#"><img src="assets/gambar5.png" alt="Instagram"></a>
            <a href="#"><img src="assets/gambar6.png" alt="Facebook"></a>
            <a href="#"><img src="assets/gambar7.png" alt="LinkedIn"></a>
            <a href="#"><img src="assets/gambar8.png" alt="Twitter"></a>
        </div>
        <div class="footer-links">
            <div>
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Team</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="#">Blog</a>
                <a href="#">Idea</a>
            </div>
        </div>`
    ;
    render(footer, document.getElementById('footer'));
};
