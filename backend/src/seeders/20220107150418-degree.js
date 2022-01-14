"use strict";

const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("degree", [
            {
                id: "a0152c77-b3ea-4501-8d63-2a006577cd87",
                name: "Giáo Sư",
            },
            {
                id: "b2b1450e-f3ac-4d3f-ad60-6a3aafb8aeb6",
                name: "Phó Giáo Sư",
            },
            {
                id: "39eec572-345d-4fdd-bb6a-527726d66e94",
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
