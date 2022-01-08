"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("user", [
            {
                id: uuidv4(),
                fullName: "admin",
                birthday: "1970/1/1",
                gender: 1,
                email: "abc@example.com",
                password: "123456",
                phone: "0987654321",
                isStudent: false,
                isInsider: true,
                address: "None",
                idcard: "None",
                issuedDate: "1970/1/1",
                issuedPlace: "None",
                majorID: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "70b23c8d-26b8-49ae-b546-7fc445a35fc5",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
