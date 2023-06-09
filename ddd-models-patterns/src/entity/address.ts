export default class Address {
  _street: string = "";
  _number: string = "";
  _zipCode: string = "";
  _city: string = "";

  constructor(street: string, number: string, zipCode: string, city: string) {
    this._street = street;
    this._number = number;
    this._zipCode = zipCode;
    this._city = city;

    this.validate();
  }

  validate() {
    if (this._street.length === 0) {
      throw new Error("Address street cannot be blank");
    }
    if (this._number.length === 0) {
      throw new Error("Address number cannot be blank");
    }
    if (this._zipCode.length === 0) {
      throw new Error("Address zip code cannot be blank");
    }
    if (this._city.length === 0) {
      throw new Error("Address city cannot be blank");
    }
  }
}

toString() {
  return `${this._street} ${this._number}, ${this._zipCode} ${this._city}`;
}
