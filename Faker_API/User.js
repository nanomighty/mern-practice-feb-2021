const faker = require("faker");

class User {
    constructor() {
        faker.locale = "id_ID";
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumberFormat();
        this.email = faker.internet.email();
        this.password = faker.internet.password()
    }
}

module.exports = User;