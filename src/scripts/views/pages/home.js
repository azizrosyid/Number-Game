import NumberGamePresenter from '../../components/number-game-presenter';
import GLOBAL_CONFIG from '../../globals/config';
import numberOperation from '../../utils/math-helper';
import RunningNumberBuilder from '../../utils/running-number-builder';

const Home = {
  async render() {
    return `
    <div id='container-game'>
      <div class="container-info-game">
        <p>Current Number</p>
        <input type="number" name="currentNumber" id="currentNumber" value="0" disabled>
        <p>Target Number</p>
        <input type="number" name="targetNumber" id="targetNumber" value="5" disabled>
        <p>Score Now</p>
        <input type="number" name="scoreNow" id="scoreNow" value="0" disabled>
      </div>
    </div>`;
  },

  async afterRender() {
    const containerGame = document.querySelector('#container-game');
    const currentNumber = document.querySelector('#currentNumber');
    const targetNumber = document.querySelector('#targetNumber');
    const scoreNow = document.querySelector('#scoreNow');

    const runningNumberBuilder = new RunningNumberBuilder();

    const addRunningNumber = runningNumberBuilder
      .setElementCurrentNumber(currentNumber)
      .setOperateNumber(numberOperation.add)
      .setSpawnTime(GLOBAL_CONFIG.SPAWN_TIME)
      .setOperationSymbol(GLOBAL_CONFIG.ADD_SYMBOl)
      .build();

    const substractRunningNumber = runningNumberBuilder
      .setElementCurrentNumber(currentNumber)
      .setOperateNumber(numberOperation.substract)
      .setSpawnTime(GLOBAL_CONFIG.SPAWN_TIME)
      .setOperationSymbol(GLOBAL_CONFIG.SUBSTRACT_SYMBOL)
      .build();

    const divideRunningNumber = runningNumberBuilder
      .setElementCurrentNumber(currentNumber)
      .setOperateNumber(numberOperation.divide)
      .setSpawnTime(GLOBAL_CONFIG.SPAWN_TIME)
      .setOperationSymbol(GLOBAL_CONFIG.DIVIDE_SYMBOL)
      .build();

    const multiplyRunningNumber = runningNumberBuilder
      .setElementCurrentNumber(currentNumber)
      .setOperateNumber(numberOperation.multiply)
      .setSpawnTime(GLOBAL_CONFIG.SPAWN_TIME)
      .setOperationSymbol(GLOBAL_CONFIG.MULTIPLY_SYMBOL)
      .build();

    const numberGamePresenter = new NumberGamePresenter({
      container: containerGame,
      currentNumber,
      targetNumber,
      scoreNow,
      arrayRunningNumber: [
        addRunningNumber,
        substractRunningNumber,
        divideRunningNumber,
        multiplyRunningNumber,
      ],
    });
    numberGamePresenter.startRunningNumber();
  },
};

export default Home;
