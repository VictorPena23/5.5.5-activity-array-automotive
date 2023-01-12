//this includes the vehicle class as a module
import { Vehicle } from "./vehicle.js";

class car extends Vehicle {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.passenger = 0;
    this.maximumPassengers = 5;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.Service = false;
  }
  loadPassenger(num) {
    // if passenger less than maximumPassengers then availableRoom == true
    this.passenger = num;
    if (this.passenger < this.maximumPassengers) {
      console.log("There is available room for more passenger(s).");
      return this.passenger;
    } else {
      console.log("Passenger capacity has been reached!");
    }
  }
  start() {
    // if fuel is greater than 0, then start == true
    if (this.fuel > 0) {
      console.log("Your vehicle engine has started!");
      return this.started == true;
    } else {
      console.log("Please add fuel to your vehicle");
    }
  }
  scheduleService(mileage) {
    // if mileage is greater than 30000, time for maintenance == true
    this.mileage = mileage;
    if (this.mileage > 30000) {
      console.log("It is time for vehicle maintenance!");
      this.service = true;
      return this.service;
    } else {
      console.log("Your vehicle is in good shape.");
    }
  }
}

// let myCar = new car("pontiac", "grand prix", "2001", "silver", 100000);