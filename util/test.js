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

jeff.sayName();

