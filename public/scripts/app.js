class App {
  constructor() {
    this.typeOfDriver = document.getElementById("driver-type");
    this.availableDate = document.getElementById("date-booking");
    this.availableTime = document.getElementById("hours-booking");
    this.passengerCapacity = document.getElementById("passenger-count");
    this.searchButton = document.getElementById("btn-search-car");
    this.findCarResult = document.getElementById("find-cars-result");
  }

  async init() {
    await this.load();

    this.searchButton.onclick = this.run;
  }

  run = async () => {
    await this.load();
    this.clear();
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.className = 'find-cars-result-coloum';
      node.innerHTML = car.render();
      this.findCarResult.appendChild(node);
    });
  };

  async load() {
    const typeOfDriverVal = this.typeOfDriver.value;
    const availDateVal = this.availableDate.value;
    const availTimeVal = this.availableTime.value;
    const passengerCapacityVal = this.passengerCapacity.value;

    const carAvailable = new Date(`${availDateVal} ${availTimeVal}`);

    const convTime = carAvailable.getTime();

    const cars = await Binar.listCars((item) => {
      const filterCapacity = item.capacity >= passengerCapacityVal;
      const filterDateTime = item.availableAt.getTime() <= convTime;
      const filterDriverType = item.driverType === typeOfDriverVal;

      return filterCapacity && filterDateTime && filterDriverType;
    });
    Car.init(cars);
  }

  clear = () => {
    let child = this.findCarResult.firstElementChild;

    while (child) {
      child.remove();
      child = this.findCarResult.firstElementChild;
    }
  };
}