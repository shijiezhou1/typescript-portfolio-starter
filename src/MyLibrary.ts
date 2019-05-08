// interface
export interface Foo {
  executeDependency: Function;
}

export interface Vehicle {
  wheel: Function;
  color: string;
  upgradable: Function;
}

// classes
export class MyLibrary implements Foo {
  executeDependency() {
    return Math.floor(Math.random() * 10 + 1);
  }
}

export class Car implements Vehicle {

  public color: string;
  public upgradable: Function;

  public wheel() {
    this.color = 'red';
    console.log(`%cColor of the car is ${this.color}`, 'color:red');
    console.log('%cmost car have four wheels', 'color: green;');
  }
}
