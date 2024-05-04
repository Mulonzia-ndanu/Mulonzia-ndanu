class Smartphone {
  constructor(brand, model, screenSize, storageCapacity, color) {
    this.brand = brand;
    this.model = model;
    this.screenSize = screenSize;
    this.storageCapacity = storageCapacity;
    this.color = color;
    this.isPowerOn = false;
    this.batteryLevel = 100;
  }

  powerOn() {
    this.isPowerOn = true;
    console.log(`${this.brand} ${this.model} is powered on.`);
  }

  powerOff() {
    this.isPowerOn = false;
    console.log(`${this.brand} ${this.model} is powered off.`);
  }

  checkBattery() {
    console.log(`Battery level: ${this.batteryLevel}%`);
  }

  rechargeBattery() {
    this.batteryLevel = 100;
    console.log(`${this.brand} ${this.model}'s battery is fully charged.`);
  }

  useApp(appName) {
    if (this.isPowerOn) {
      console.log(`Opening ${appName} app on ${this.brand} ${this.model}.`);
      this.consumeBattery(5); // Simulating battery consumption
    } else {
      console.log(`${this.brand} ${this.model} is powered off. Cannot use apps.`);
    }
  }

  consumeBattery(amount) {
    if (this.isPowerOn) {
      if (this.batteryLevel >= amount) {
        this.batteryLevel -= amount;
        console.log(`${amount}% battery consumed.`);
      } else {
        console.log(`Battery too low. Please recharge.`);
      }
    } else {
      console.log(`${this.brand} ${this.model} is powered off.`);
    }
  }
}


