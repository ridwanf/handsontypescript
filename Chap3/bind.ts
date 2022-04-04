class A {
  name: string = 'A';
  go() {
    console.log(this)
    console.log(this.name);
  }
}

class B {
  name: string = 'B';
  go() {
    console.log(this)
    console.log(this.name);
  }
}
console.log(this)
const a = new A();
a.go()

const b = new B();
b.go();
b.go = b.go.bind(a);
b.go()