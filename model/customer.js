
//create Customer class

export class Customer {

    constructor(cusId, fName, lName, address, nic, email, contact) {

        this._cusId = cusId;
        this._fName = fName;
        this._lName = lName;
        this._address = address;
        this._nic = nic;
        this._email = email;
        this._contact = contact;
    }

    set cusId(cusId) {
        this._cusId = cusId;
    }

    get cusId() {
        return this._cusId;
    }

    set fName(fName) {
        this._fName = fName;
    }

    get fName() {
        return this._fName;
    }

    set lName(lName) {
        this._lName = lName;
    }

    get lName() {
        return this._lName;
    }

    set address(address) {
        this._address = address;
    }

    get address() {
        return this._address;
    }
    set nic(nic) {
        this._nic = nic;
    }

    get nic() {
        return this._nic;
    }
    set email(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }
    set contact(contact) {
        this._contact = contact;
    }

    get contact() {
        return this._contact;
    }

}