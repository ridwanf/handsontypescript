class Person {
  constructor(private readonly msg: string) {}
  speak() {
    console.log(this.msg);
  }
}

const tom2 = new Person("hello");
tom2.speak()