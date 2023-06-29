// Problem 1. 

Character.prototype.setName=function(x){
this.name=x;
}

function Character() {
this.name='unnamed'

}



let c = new Character();
  console.log(c); // { name: 'unnamed' }
  c.setName('Williams');
  console.log(c); // { name: 'Williams' }



// function Warrior() {

// }

Warrior.prototype.increaseStrength=function(){
    this.strength+=100;
  }
  Warrior.prototype.decreaseStrength=function(){
    this.strength-=100;
  }
  
  Object.setPrototypeOf(Warrior.prototype,Character.prototype)
  function Warrior() {
  Character.call(this)
    this.strength=0;
  }
  let w = new Warrior();
  console.log(w); // { name: 'unnamed', strength: 0 }
  w.setName('Williams');
  console.log(w); // { name: 'Williams', strength: 0 }
  w.increaseStrength();
  w.increaseStrength();
  console.log(w); // { name: 'Williams', strength: 200 }
  w.decreaseStrength()
  console.log(w); // { name: 'Williams', strength: 100 }
  



// function Knight() {

// }

Knight.prototype.setWeapon=function(x){
    this.weapon=x;
  }
  
  Object.setPrototypeOf(Knight.prototype,Warrior.prototype)
  
  
  function Knight() {
  Warrior.call(this)
    this.weapon='no weapon'
  }
  let k = new Knight();
  console.log(k); // { name: 'unnamed', strength: 0, weapon: 'no weapon' }
  k.setName('William');
  k.increaseStrength();
  
  k.setWeapon('Sword');
  console.log(k); // { name: 'William', strength: 100, weapon: 'Sword' }

// Problem 2.

// class Vehicle {

// }

// class Car {

// }

// class Truck  {

// }

// class Motorcycle  {

// }

class Vehicle{
    constructor(make){
      this.make=make;
    }
    setMake(x){
      this.make=x;
    }
  }
  
  let v = new Vehicle('123');
  console.log(v); // { make: '123' }
  v.setMake('ABC');
  console.log(v); // { make: 'ABC' }
  
  
  
  
  class Car extends Vehicle{
    constructor(make,model){
      super(make);
      this.model=model
    }
  }
  
  let c1 = new Car('123', 'XYZ');
  c1.setMake('ABC');
  console.log(c1); // { make: 'ABC', model: 'XYZ' }
  
  
  class Truck extends Vehicle{
    constructor(make,bedSize){
      super(make);
      this.bedSize=bedSize;
    }
  }
  
  let t = new Truck('123', 200);
  t.setMake('AAA');
  console.log(t); // { make: 'AAA', bedSize: 200 }
  
  
  class Motorcycle extends Vehicle{
    constructor(make,engineSize){
      super(make);
      this.engineSize=engineSize;
    }
  }
  
  let m = new Motorcycle('123', 455);
  m.setMake('BBBB');
  console.log(m); // { make: 'BBBB', engineSize: 455 }
  




export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle}