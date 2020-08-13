('use strict')

cosnt Animal = finction (*name){
    this.name = name;
    this.talk= ()=> console.log ('hey')
}



Animal.prototype.walk = ()=> {
    console.log('walkin...')
}
let rosie = new Animal ('rosie')

const Dog = function (name){
Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.speak = () => {
    console.log('woof')
}
let rosie = new Dog(' rosue')
rosie.talk()
rosie.walk()
rosie.speak()
