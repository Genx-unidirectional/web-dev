class Base {
  greet() {
    console.log("hello people");
  }
}

class Derived extends Base {
  greet(name?: String) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`hello ${name}`);
    }
  }
}

// Q-> Make the animal class whose fields get more specified type in it's derived dog class

interface AnimalFields {
  dateOfBirth: any;
}

interface DogField extends AnimalFields {
  breed: any;
}

class AnimalBase {
  resident: AnimalFields;
  constructor(animal: AnimalFields) {
    this.resident = animal;
  }
}

class Dog {
  declare resident: DogField;
  constructor(animal: DogField) {
    this.resident = animal;
  }
}

// Access modifier

class Base2 {
  constructor(
    private name: string,
    public age: number,
    protected active: boolean
  ) {
    this.name = name;
    this.age = age;
    this.active = active;
  }
}

//Create the class which can tell how many times it invokes

class Incremental {
  static count = 0;
  public id: number;
  getCount() {
    return Incremental.count;
  }
  constructor(public purpose: string, public time: number) {
    this.purpose = purpose;
    this.time = time;
    this.id = ++Incremental.count;
  }
}

// const IncrementalTest1 = new Incremental("to test", 1);
// const IncrementalTest2 = new Incremental("to test", 1);
// const IncrementalTest3 = new Incremental("to test", 1);

// console.log(IncrementalTest3.id);

//Super keyword

class Base3 {
  k = 12;
}

class Derived3 extends Base3 {
  constructor() {
    super();
    this.k = 12;
  }
}

class Base4 {
  constructor(
    public name: string,
    public age: string,
    private customer: string
  ) {
    this.age = age;
    this.name = name;
    this.customer = customer;
  }
}

class Derived4 extends Base4 {
  constructor(name: string, age: string, customer: string) {
    super(name, age, customer);
  }
}
