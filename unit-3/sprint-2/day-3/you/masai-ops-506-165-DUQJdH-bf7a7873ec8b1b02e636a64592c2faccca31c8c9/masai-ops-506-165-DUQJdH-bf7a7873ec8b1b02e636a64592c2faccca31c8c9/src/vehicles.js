// Function constructor
function FourWheeler(model, color, speed, fuel) {

this.model=model;
this.color=color;
this.speed=speed;
this.fuel=fuel;

}

 

// Parent object for Object.create
let FourWheelerObject = {};

// Store function contructor object here
var car1=new FourWheeler('baleno','blue',180,5)
console.log(car1);
// Store Object.create here
var car2;

export { car1, car2 };
