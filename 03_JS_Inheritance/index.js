class Car{
    constructor(color)
    {
        this.color = color; 
    }

}

class EngineCar extends Car
{
    constructor(color, engine)
    {
        super(color);
        this.engine = engine; 
    }
}

let car = new EngineCar("red", "V8"); 
console.log(car.color, car.engine);