('strict');


class Animal {
  constructor(name){
    this.name = name;


  }
  walk(){
    console.log('walking');
  }

}

class Dog extends Animal {
  speak(){
    console.log('woof');
  }
}

let rosie = new Dog ('rosie');
console.log(rosie);

rosie.walk();
rosie.speak();

let rosie= new Dog(' rosie')


module.exports = Dog;