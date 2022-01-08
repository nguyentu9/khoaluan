"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("major", [
            {
                id: uuidv4(),
                name: "Giáo dục mầm non",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: uuidv4(),
                name: "Giáo dục tiểu học",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: uuidv4(),
                name: "Sư phạm Toán học",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: uuidv4(),
                name: "Sư phạm Ngữ văn",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: uuidv4(),
                name: "Văn hoá học",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: uuidv4(),
                name: "Văn học",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: uuidv4(),
                name: "Tiếng Anh",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: uuidv4(),
                name: "Quản trị Kinh doanh",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: uuidv4(),
                name: "Kế toán",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: uuidv4(),
                name: "Kinh tế",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: uuidv4(),
                name: "Tài chính_Ngân hàng",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: uuidv4(),
                name: "Du lịch",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: uuidv4(),
                name: "Luật",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
                name: "Công nghệ Thông tin",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: uuidv4(),
                name: "CNKT Xây dựng",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: uuidv4(),
                name: "CNKT Cơ điện tử",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: uuidv4(),
                name: "CNKT Cơ khí",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: uuidv4(),
                name: "CNKT Điều khiển và tự động hoá",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: uuidv4(),
                name: "Điện_Điện tử",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: uuidv4(),
                name: "Công nghệ May",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: uuidv4(),
                name: "Công nghệ Sinh học",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: uuidv4(),
                name: "Khoa học cây trồng",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: uuidv4(),
                name: "Công nghệ thực phẩm",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: uuidv4(),
                name: "Chăn nuôi",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: uuidv4(),
                name: "Bảo vệ thực vật",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: uuidv4(),
                name: "Nuôi trồng thuỷ sản",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
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
