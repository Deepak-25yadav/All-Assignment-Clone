// Function constructor

FourWheeler.prototype.setSpeed=function(x){

    this.speed=x;
}
FourWheeler.prototype.updateColor=function(x){
    this.color=x;
}
FourWheeler.prototype.updateFuel=function(x){
    this.fuel=x
}

function FourWheeler(wheels,model, color, speed, fuel) {

this.wheels=wheels;
this.model=model;
this.color=color;
this.speed=speed;
this.fuel=fuel;

}

// Parent object for Object.create
let FourWheelerObject = Object.create(new FourWheeler(6,'tata mahindra','Blue',90,10));

// Store function contructor object here
var car1=new FourWheeler(4,'tata mahindra','Blue',80,5);
// console.log(car1);
// Store Object.create here

var car2=FourWheelerObject;
//or
//var car2=Object.create(car1);

export { car1, car2 };
