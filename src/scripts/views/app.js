import Home from './pages/home';

class App {
  constructor({ mainContent }) {
    this.mainContent = mainContent;
  }

  async render() {
    this.mainContent.innerHTML = await Home.render();
    await Home.afterRender();
  }
}

export default App;
