import NumberGamePresenter from '../../components/number-game-presenter';
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

    const addRunningNumber = new RunningNumberBuilder()
      .setElementCurrentNumber(currentNumber)
      .setOperateNumber(numberOperation.add)
      .setSpawnTime(200)
      .setOperationSymbol('+')
      .build();

    const substractRunningNumber = new RunningNumberBuilder()
      .setElementCurrentNumber(currentNumber)
      .setOperateNumber(numberOperation.substract)
      .setSpawnTime(200)
      .setOperationSymbol('-')
      .build();

    const divideRunningNumber = new RunningNumberBuilder()
      .setElementCurrentNumber(currentNumber)
      .setOperateNumber(numberOperation.divide)
      .setSpawnTime(200)
      .setOperationSymbol('/')
      .build();

    const multiplyRunningNumber = new RunningNumberBuilder()
      .setElementCurrentNumber(currentNumber)
      .setOperateNumber(numberOperation.multiply)
      .setSpawnTime(200)
      .setOperationSymbol('x')
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
