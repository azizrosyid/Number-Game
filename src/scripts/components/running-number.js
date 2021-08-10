class RunningNumber {
  constructor({ currentNumber, spawnTime, operateNumber }) {
    this.currentNumber = currentNumber;
    this.spawnTime = spawnTime;
    this.operateNumber = operateNumber;

    this.countNumberDiv = 0;

    this.createColumn();
    this.createOperateButton();
  }

  createColumn() {
    const div = document.createElement('div');
    div.classList.add('column');
    this.column = div;
  }

  createOperateButton() {
    const btn = document.createElement('button');
    btn.textContent = '+';
    btn.addEventListener('click', () => this.handleOperatorButton());
    this.operateButton = btn;
  }

  handleOperatorButton() {
    const lastElement = this.column.lastElementChild;
    let lastNumber = 0;

    if (lastElement.textContent !== '-') {
      lastNumber += this.column.lastElementChild.textContent;
    }

    this.currentNumber.value = this.operateNumber(
      parseFloat(this.currentNumber.value) || 0,
      parseFloat(lastNumber),
    );

    this.currentNumber.dispatchEvent(new Event('number:changed'));
  }

  renderTo(container) {
    container.appendChild(this.column);
    container.appendChild(this.operateButton);
  }

  generateNumber() {
    const divNumber = document.createElement('div');
    divNumber.classList.add('column__number');
    const randomNumber = Math.floor(Math.random() * 20);

    if (this.countNumberDiv >= 10) {
      this.column.removeChild(this.column.lastElementChild);
    } else {
      this.countNumberDiv += 1;
    }
    if (randomNumber > 10) {
      divNumber.innerText = '-';
    } else {
      divNumber.innerText = Math.floor(Math.random() * 10);
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
