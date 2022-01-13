"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("jobtitle", [
            {
                id: "00000000-0000-0000-0000-000000000000",
                name: "_Không",
            },
            {
                id: "e3ddf021-6b49-4e6a-af25-63a7a7d40916",
                name: "Chủ tịch Công đoàn trường",
            },
            {
                id: "ce7aa648-b6cb-4927-89c4-0217a04245dc",
                name: "Phó Chủ tịch Công đoàn trường",
            },
            {
                id: "2594e904-0efe-4d26-967e-364e01a4f4e7",
                name: "Bí thư UVBCHĐB",
            },
            {
                id: "3e314315-868f-4c02-a64e-1ea22d24ce4e",
                name: "Phó Bí thư BCHĐB",
            },
            {
                id: "ac235219-98f7-4623-a3d2-b22835a68e25",
                name: "Phó Bí thư UVBCHĐB",
            },
            {
                id: "81d4422f-7fef-418f-8d55-38d3abd7b180",
                name: "UV BTVĐB",
            },
            {
                id: "26b93e0d-e60c-4ae8-9af6-d4c64dcaaa64",
                name: "UVBCHĐB Uỷ viên",
            },
            {
                id: "473c8cc8-3eea-48d1-95aa-0f89f283911b",
                name: "Quyền trưởng bộ môn",
            },
            {
                id: "36340aa6-948a-488b-93f1-43f9807f0768",
                name: "Bí thư đảng uỷ",
            },
            {
                id: "7a7bee76-13de-42ff-9762-536b95bc0fd3",
                name: "Bí Thư Đoàn TN",
            },
            {
                id: "95922ec0-b2fb-44eb-a2d7-8ab2611ae27a",
                name: "Phó bí thư Đoàn TN",
            },
            {
                id: "d5309bcf-4b19-4866-8040-6eba37edebd4",
                name: "Phó bí thư đảng uỷ",
            },
            {
                id: "cb44f49d-1cd7-4556-8c76-b1b4a35a9f0d",
                name: "Chủ tịch hội đồng trường",
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("jobtitle", {}, null);
    },
};
