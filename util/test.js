class Cat{
  constructor(name){
    this.name = name;
  }

  sayName(){
    let a = [1,2,3];
    let b = {name: 'me'};
    a.forEach(el => {
      console.log(`hi from ${this.name}`);
    }, b);
  }

}

let jeff = new Cat('jeff');
let jeff2 = new Cat('jeff');
let jeff3 = new Cat('jeff2');

jeff.sayName();

let stuff = {};

stuff[jeff] = 'hi';
stuff[jeff2] = 'bye';
stuff[jeff3] = 'stuff';

console.log(stuff[jeff]);
console.log(stuff[jeff2]);
console.log(stuff);
