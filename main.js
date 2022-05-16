//extend the canva to the full window size
const canvas = document.getElementById('myCanvas');
canvas.width = 200;

//draw the car
const ctx = canvas.getContext('2d');
//create instance car with class Car; postion of the car
const car = new Car(100, 100, 30, 50);
//call function draw; it is the size of the car
car.draw(ctx);

//create a function called animate, to display the update of car's position
animate();

function animate() {
    car.update();
    //height of the canvas should change with the position of the car
    canvas.height = window.innerHeight;
    car.draw(ctx);
    //this refresh the car again and agian, like it is moving
    requestAnimationFrame(animate);
}
