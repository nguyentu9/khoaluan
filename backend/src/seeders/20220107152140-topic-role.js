"use strict";

const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        // await queryInterface.bulkInsert("topicrole", [
        //     {
        //         id: uuidv4(),
        //         name: "Chủ tịch Công đoàn trường",
        //     },
        //     {
        //         id: uuidv4(),
        //         name: "Chủ Nhiệm",
        //     },
        //     {
        //         id: uuidv4(),
        //         name: "Đồng Chủ Nhiệm",
        //     },
        //     {
        //         id: uuidv4(),
        //         name: "Thành Viên Thực Hiện Chính",
        //     },
        //     {
        //         id: uuidv4(),
        //         name: "Thành Viên",
        //     },
        // ]);
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
