
// 2. How to implement class inheritance in JavaScript ?

class Car{
    constructor(model,name){
        this.model = model;
        this.name = name;
    };
    start(){
        console.log(`my car is a : ${this.name}`);
    }

    end(){
        console.log("welcome");
    }
}

class Extra extends Car{
     
     childhood(){
        console.log("To Javascript....");
     }
    start(){
        super.start();
        super.end();
        this.childhood();
    }
}

first = new Extra(123,"Honda");
first.start();

