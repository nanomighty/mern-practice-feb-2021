const faker = require("faker");

class Company {
    constructor() {
        faker.locale = "id_ID";
        this.name = faker.company.companyName();
        this.addressStreet = faker.address.streetAddress();
        this.addressCity = faker.address.city();
        this.addressState = faker.address.state();
        this.addressZipCode = faker.address.zipCodeByState();
        this.addressCountry = faker.address.country();
    }
}

module.exports = Company;

