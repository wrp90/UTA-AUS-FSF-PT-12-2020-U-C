// TODO: Import the parent class
const vehicle = require('./vehicle')
// TODO: Create a `Car` class that extends the `Vehicle` class
class car extends vehicle {
  constructor(id, color, passengers) {
    super(id, 4, 'beep');
    this.color
  }
}
const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
