import generateRandomNumber from '../utils/generate-random-number';

class RunningNumber {
  constructor({
    currentNumber, spawnTime, operateNumber, operationSymbol,
  }) {
    this.currentNumber = currentNumber;
    this.spawnTime = spawnTime;
    this.operateNumber = operateNumber;

    this.countNumberDiv = 0;

    this.createColumn();
    this.createOperateButton(operationSymbol);
  }

  createColumn() {
    const div = document.createElement('div');
    div.classList.add('column');
    this.column = div;
  }

  createOperateButton(operationSymbol) {
    const btn = document.createElement('button');
    btn.textContent = operationSymbol;
    btn.classList.add('column__button');
    btn.addEventListener('click', () => this.handleOperatorButton());
    this.operateButton = btn;
  }

  handleOperatorButton() {
    const lastElement = this.column.querySelector('div:nth-child(10)');
    let lastNumber = 0;

    if (lastElement === null || lastElement.textContent === '') return;
    lastNumber += this.column.lastElementChild.textContent;
    lastElement.textContent = '';

    this.currentNumber.value = this.operateNumber(
      this.currentNumber.value,
      lastNumber,
    );

    this.currentNumber.dispatchEvent(new Event('number:changed'));
  }

  renderTo(container) {
    const divRender = document.createElement('div');
    divRender.classList.add('container-column');
    divRender.appendChild(this.column);
    divRender.appendChild(this.operateButton);

    container.appendChild(divRender);
  }

  generateNumber() {
    const divNumber = document.createElement('div');
    divNumber.classList.add('column__number');
    const randomNumber = generateRandomNumber(1, 20);

    if (this.countNumberDiv >= 10) {
      this.column.removeChild(this.column.lastElementChild);
    } else {
      this.countNumberDiv += 1;
    }
    if (randomNumber > 9) {
      divNumber.innerText = '';
    } else {
      divNumber.innerText = randomNumber;
    }

    return divNumber;
  }

  loopAddNumberToColumn() {
    this.loopInterval = setInterval(() => {
      this.column.prepend(this.generateNumber());
    }, this.spawnTime);
  }

  clearLoopAddToNumber() {
    clearInterval(this.loopInterval);
  }
}
export default RunningNumber;
