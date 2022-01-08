"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("major", [
            {
                id: "7b2a90ac-d865-4791-a4a0-ab34cc62a721",
                name: "Giáo dục mầm non",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: "abac87d9-fcf4-49d0-b985-2280b1d3cb83",
                name: "Giáo dục tiểu học",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: "eeac4495-c397-4d56-905c-bd6161d4c60c",
                name: "Sư phạm Toán học",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: "6d2e4876-ae85-40be-a0c7-595c22eaaec5",
                name: "Sư phạm Ngữ văn",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: "c76ffcbc-8672-4794-88d0-6b41ef9dcc77",
                name: "Văn hoá học",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: "92f158f6-26fa-43cc-9981-b0b2606c17e9",
                name: "Văn học",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: "0e2ed89a-6b41-4aec-8b6b-5c7869ef3121",
                name: "Tiếng Anh",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: "764bf141-f1ca-410a-a1fd-65b9d4ee5c79",
                name: "Quản trị Kinh doanh",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: "77de2bca-6142-43ae-8ecd-b9ab57c8ee00",
                name: "Kế toán",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: "3b87ff69-bfa9-4b93-94fc-39e99935ac2f",
                name: "Kinh tế",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: "e76eb1d2-fef6-45c9-99c1-ec47930ffeaa",
                name: "Tài chính_Ngân hàng",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: "24129cb5-e14b-4403-a25d-ec29cb3f9b0b",
                name: "Du lịch",
                facultyID: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
            },
            {
                id: "c12eb8a7-3d0d-4b68-a630-33a4e6ef668a",
                name: "Luật",
                facultyID: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
            },
            {
                id: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
                name: "Công nghệ Thông tin",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: "7df9072e-16ec-49f2-88e8-8e0e39518a3e",
                name: "CNKT Xây dựng",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: "764bdd32-e6c5-410c-84de-02cd0fcb9d36",
                name: "CNKT Cơ điện tử",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: "c8941ec3-3145-4d4c-b133-8212969c99a7",
                name: "CNKT Cơ khí",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: "d7248412-18a4-47d0-8f6d-711779fdd2fe",
                name: "CNKT Điều khiển và tự động hoá",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: "ae15f6a4-e83d-4007-9b1d-4a2eb7ff1af6",
                name: "Điện_Điện tử",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: "5a4a9e2b-971d-4afb-8e1f-7e3b4f0c5907",
                name: "Công nghệ May",
                facultyID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
            },
            {
                id: "84809737-99b6-4678-a2c0-3b317a364e5c",
                name: "Công nghệ Sinh học",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: "9cf4db72-86f2-4709-ae65-996fd54ec8ee",
                name: "Khoa học cây trồng",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: "338a481f-43c8-4596-9561-1d051faffdc8",
                name: "Công nghệ thực phẩm",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: "a2be2413-61f7-4082-ad86-cb6b7be05120",
                name: "Chăn nuôi",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: "73390409-e098-4ba9-8d3f-807fa535ef36",
                name: "Bảo vệ thực vật",
                facultyID: "49799427-8b28-4937-a0cd-d47486aea24f",
            },
            {
                id: "d180b201-bbe1-4874-9859-347227b0ae15",
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
