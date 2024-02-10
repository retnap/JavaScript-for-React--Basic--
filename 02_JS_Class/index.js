class Car
{
    constructor(color)
    {
        this.color = color;
        this.speed = 0; 
    }


    speed_up()
    {
        this.speed += 10; 
    }
}

let car = new Car("black");

car.speed_up();

console.log(car);
console.log(car.speed);