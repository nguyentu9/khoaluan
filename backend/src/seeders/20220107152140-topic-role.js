"use strict";

const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("topicrole", [
            {
                id: "3a259543-e7b9-4137-9a4f-7df800050cf4",
                name: "Chủ Nhiệm",
            },
            {
                id: "51eb7852-2396-40eb-8704-f801eb332391",
                name: "Đồng Chủ Nhiệm",
            },
            {
                id: "d3e64eca-ba95-4acd-9cb1-6573db7c3d1b",
                name: "Thành Viên Thực Hiện Chính",
            },
            {
                id: "c1ca663a-7c68-44fc-a504-55de37b4910f",
                name: "Thành Viên",
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
