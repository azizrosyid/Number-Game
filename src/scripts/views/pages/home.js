import NumberGamePresenter from '../../components/number-game-presenter';
import RunningNumber from '../../components/running-number';

const Home = {
  async render() {
    return `
    <div id='container-game'>
      <input type="number" name="currentNumber" id="currentNumber" value="0" disabled>
      <input type="number" name="targetNumber" id="targetNumber" value="5" disabled>
      <input type="number" name="scoreNow" id="scoreNow" value="0" disabled>
    </div>`;
  },

  async afterRender() {
    const containerGame = document.querySelector('#container-game');
    const currentNumber = document.querySelector('#currentNumber');
    const targetNumber = document.querySelector('#targetNumber');
    const scoreNow = document.querySelector('#scoreNow');
    const addRunningNumber = new RunningNumber({
      currentNumber,
      spawnTime: 500,
      operateNumber: (a, b) => a + b,
    });
    addRunningNumber.renderTo(containerGame);
    addRunningNumber.loopAddNumberToColumn();

    const numberGamePresenter = new NumberGamePresenter({
      container: containerGame,
      currentNumber,
      targetNumber,
      scoreNow,
    });
  },
};

export default Home;
