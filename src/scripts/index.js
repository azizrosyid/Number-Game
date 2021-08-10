import '../styles/style.css';
import App from './views/app';

const main = document.querySelector('main');
const app = new App({ mainContent: main });

app.render();
