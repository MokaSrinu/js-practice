
//using object.create
var fourwheeler1={
    model:2020,
    name:"Tata 2020",
    wheels:4,
    color:"red",
    enginehp:16.8,
}

var fourwheeler2=Object.create(fourwheeler1);
fourwheeler2.enginehp=28.9;
console.log(fourwheeler2.color);
console.log(fourwheeler1);


//using constructor
var features=function(enginehp){
   console.log(this.model);
   console.log(this.name);
   console.log(this.wheels);
   console.log(this.color);
   console.log(this.enginehp);
   console.log(enginehp);
}
features.call(fourwheeler1,28.9);
