function add() {
  console.log('this ', this);
}

var name = 'David';

function getName() {
  console.log('name : ', this.name)
}

const getNameAF = () => { console.log(name); }

getName();

const obj = {
  name: 'John',
  print: getName,
  getNameSd() {
    console.log('name : ', this.name)
  },
  printAF: getNameAF,
}

const person = {
  name: 'Amir',
}

add();
obj.print();
obj.getNameSd();
obj.printAF();
getName.apply(person);
getName.call(person);

let counter = 0;

function clicked() {
  counter++;
}

clicked();
clicked();
clicked();
console.log('counter', counter);

function makeCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  }
}

const clicker = makeCounter();
console.log(clicker());
console.log(clicker());
console.log(clicker());
