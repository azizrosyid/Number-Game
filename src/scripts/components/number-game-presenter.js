class NumberGamePresenter {
  constructor({
    container, currentNumber, targetNumber, scoreNow,
  }) {
    this.container = container;
    this.currentNumber = currentNumber;
    this.targetNumber = targetNumber;
    this.scoreNow = scoreNow;

    this.watchOnCurrentNumber();
  }

  watchOnCurrentNumber() {
    this.currentNumber.addEventListener('number:changed', () => {
      console.log('masuk event');
      console.log(this.currentNumber.value, this.targetNumber.value);
      if (this.currentNumber.value === this.targetNumber.value) {
        this.scoreNow.value = parseFloat(this.scoreNow.value) + 1;
      }
    });
  }
}

export default NumberGamePresenter;
