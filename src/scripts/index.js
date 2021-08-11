import '../styles/style.css';
import 'regenerator-runtime/runtime';
import App from './views/app';

const main = document.querySelector('main');
const app = new App({ mainContent: main });

app.render();
