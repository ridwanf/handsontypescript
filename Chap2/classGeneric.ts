namespace GenericNameSpace {
  interface Wheels {
    count: number;
    diameter: number;
  }
  interface Vehicle<T> {
    getName(): string;
    getWheelCount: () => T
  }

  class Automobile implements Vehicle<Wheels>{
    constructor(private name: string, private wheels: Wheels){}
    getName(): string {
      return this.name;
    }
    getWheelCount(): Wheels {
      return this.wheels
    }   
  }

  class Chevy extends Automobile {
    constructor(){
      super('Chevrolet', {count: 4, diameter: 10});
    }
  }

  const chevy = new Chevy();
  console.log(chevy.getName());
  console.log(chevy.getWheelCount());
}
