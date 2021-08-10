import RunningNumber from '../components/running-number';

class RunningNumberBuilder {
  setElementCurrentNumber(currentNumber) {
    this.currentNumber = currentNumber;
    return this;
  }

  setSpawnTime(spawnTime) {
    this.spawnTime = spawnTime;
    return this;
  }

  setOperateNumber(functionOperate) {
    this.operateNumber = functionOperate;
    return this;
  }

  setOperationSymbol(operationSymbol) {
    this.operationSymbol = operationSymbol;
    return this;
  }

  build() {
    return new RunningNumber({
      currentNumber: this.currentNumber,
      spawnTime: this.spawnTime,
      operateNumber: this.operateNumber,
      operationSymbol: this.operationSymbol,
    });
  }
}

export default RunningNumberBuilder;
