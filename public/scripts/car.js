class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    driverType,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.driverType = driverType;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="find-cars-result-card">
        <img src="${this.image}" alt="${this.manufacture}" height="200">
        <div class="cars-result-body">
          <p class="cars-result-body-name">${this.manufacture} / ${this.type}</p>
          <p><b>Rp ${this.rentPerDay} / hari</b></p>
          <p class="cars-result-body-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div class="cars-result-body-icon">
            <p><i class="bi bi-people"></i>${this.capacity}</p>
            <p style="padding: .5rem 0;"><i class="bi bi-gear"></i>${this.transmission}</p>
            <p><i class="bi bi-calendar4"></i>Tahun ${this.year}</p>
          </div>
          <button class="button-cars">Pilih Mobil</button>
        </div>
      </div>
      
      
    `;
  }
}
