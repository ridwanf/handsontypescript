namespace InterfaceNameSpace {
  interface Thing {
    name: string;
    getFullName: () => string;
  }

  interface Vehicle extends Thing {
    wheelCount: number;
    updateWheelCount: (newWheelCount: number) => void;
    showNumberWheels: () => void;
  }

  class Motorcycle implements Vehicle {
    wheelCount: number;
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    updateWheelCount(newWheelCount: number): void{
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`)
    };
    showNumberWheels() {
      console.log(`moved motorcycle ${this.wheelCount} miles`)
    };
    getFullName() {
      return "MC- " + this.name
    };
  }
  const moto = new Motorcycle("beginner-cycle");

  console.log(moto.getFullName());
}
