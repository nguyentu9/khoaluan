"use strict";

const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("degree", [
            {
                id: uuidv4(),
                name: "Giáo Sư",
            },
            {
                id: uuidv4(),
                name: "Phó Giáo Sư",
            },
            {
                id: uuidv4(),
                name: "Tiến Sĩ",
            },
            {
                id: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                name: "Thạc Sĩ",
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
