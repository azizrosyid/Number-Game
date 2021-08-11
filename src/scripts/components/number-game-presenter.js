import generateRandomNumber from '../utils/generate-random-number';

class NumberGamePresenter {
  constructor({
    container, currentNumber, targetNumber, scoreNow, arrayRunningNumber,
  }) {
    this.container = container;
    this.currentNumber = currentNumber;
    this.targetNumber = targetNumber;
    this.scoreNow = scoreNow;
    this.arrayRunningNumber = arrayRunningNumber;

    this.renderRunningNumber();
    this.generateRandomTargetNumber();
    this.watchOnCurrentNumber();
  }

  watchOnCurrentNumber() {
    this.currentNumber.addEventListener('number:changed', () => {
      if (this.currentNumber.value === this.targetNumber.value) {
        this.scoreNow.value = parseFloat(this.scoreNow.value) + 1;
        this.resetCurrentNumber();
        this.generateRandomTargetNumber();
      }
    });
  }

  resetCurrentNumber() {
    this.currentNumber.value = 0;
  }

  generateRandomTargetNumber() {
    this.targetNumber.value = generateRandomNumber(1, 100);
  }

  renderRunningNumber() {
    const divArrayNumber = document.createElement('div');
    divArrayNumber.classList.add('container-running-number');
    this.arrayRunningNumber.forEach((runningNumber) => {
      runningNumber.renderTo(divArrayNumber);
    });

    this.container.appendChild(divArrayNumber);
  }

  startRunningNumber() {
    this.arrayRunningNumber.forEach((runningNumber) => runningNumber.loopAddNumberToColumn());
  }

  stopRunningNumber() {
    this.arrayRunningNumber.forEach((runningNumber) => runningNumber.clearLoopAddToNumber());
  }

  resetGame() {
    this.scoreNow.value = 0;
    this.generateRandomTargetNumber();
    this.resetCurrentNumber();
  }
}

export default NumberGamePresenter;
