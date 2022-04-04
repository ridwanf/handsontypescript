class Vehicle {
  constructor(private wheelCount: number){}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miles`)
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }
}
class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}