"use strict";

const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("degree", [
            {
                id: uuidv4(),
                name: "Giáo Sư",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                name: "Phó Giáo Sư",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                name: "Tiến Sĩ",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                name: "Thạc Sĩ",
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
