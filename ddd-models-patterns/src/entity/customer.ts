import Address from "./address";

export default class Customer {
  _id: string;
  _name: string = "";
  _address!: Address;
  _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Customer name cannot be blank");
    }
    if (this._id.length === 0) {
      throw new Error("Customer ID cannot be blank");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Customer address cannot be blank");
    }
  }

  deactivate() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}

let customer = new Customer("123", "");
