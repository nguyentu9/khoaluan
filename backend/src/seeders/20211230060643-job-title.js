"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("jobtitle", [
            {
                id: uuidv4(),
                name: "Chủ tịch Công đoàn trường",
            },
            {
                id: uuidv4(),
                name: "Phó Chủ tịch Công đoàn trường",
            },
            {
                id: uuidv4(),
                name: "Bí thư UVBCHĐB",
            },
            {
                id: uuidv4(),
                name: "Phó Bí thư BCHĐB",
            },
            {
                id: uuidv4(),
                name: "Phó Bí thư UVBCHĐB",
            },
            {
                id: uuidv4(),
                name: "UV BTVĐB",
            },
            {
                id: uuidv4(),
                name: "UVBCHĐB Uỷ viên",
            },
            {
                id: uuidv4(),
                name: "Quyền trưởng bộ môn",
            },
            {
                id: uuidv4(),
                name: "Bí thư đảng uỷ",
            },
            {
                id: uuidv4(),
                name: "Bí Thư Đoàn TN",
            },
            {
                id: uuidv4(),
                name: "Phó bí thư Đoàn TN",
            },
            {
                id: uuidv4(),
                name: "Phó bí thư đảng uỷ",
            },
            {
                id: uuidv4(),
                name: "Chủ tịch hội đồng trường",
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("jobtitle", {}, null);
    },
};
