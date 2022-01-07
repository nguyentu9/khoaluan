const faker = require("@withshepherd/faker");

faker.locale = "vi";

console.log(faker.name.findName());
console.log(faker.address.streetAddress(true));
