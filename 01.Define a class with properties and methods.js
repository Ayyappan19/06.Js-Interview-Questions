
// 01.How to define a class with properties and methods in JavaScript ?
 
class Car{
    constructor(model,name){
        this.model=model;
        this.name=name;
    }
    first(){
        console.log(`My car is a : ${this.model}`);
    };
};
result = new Car(1234,"I20");
result.first();

