namespace AbstarctNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}

    abstract updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Motorcycle has ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
    showNumberOfWheels() {
      console.log(`moved autoMobile ${this.wheelCount} miles`);
    }
  }

  const motorCycle = new Motorcycle();

  motorCycle.updateWheelCount(1);
  motorCycle.showNumberOfWheels()

  const autoMobile = new Automobile();
  autoMobile.showNumberOfWheels();

  autoMobile.updateWheelCount(3);
  autoMobile.showNumberOfWheels();
}
