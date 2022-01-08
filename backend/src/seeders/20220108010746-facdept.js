"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("facdept", [
            {
                id: "3847acd7-50ce-4590-850b-add577c0bedf",
                name: "Phòng Công tác sinh viên",
                type: "department",
            },
            {
                id: "fb6fa7ff-80bf-4da7-9999-6220eb17c574",
                name: "Phòng Quản lý đào tạo",
                type: "department",
            },
            {
                id: "a6c9d661-47a4-4f74-a875-400274bb32f5",
                name: "Phòng Tổ chức - Hành chính",
                type: "department",
            },
            {
                id: "a8ba3f64-8a74-4ed1-adf2-37edca60586b",
                name: "Phòng Thanh tra pháp chế",
                type: "department",
            },
            {
                id: "eda20953-c455-49bb-90b2-2490c0fd16fd",
                name: "Phòng Quản lý khoa học công nghệ và Hợp tác quốc tế",
                type: "department",
            },
            {
                id: "dcd94744-5148-4cc1-bfec-a6d7868d007d",
                name: "Phòng Kế hoạch - Tài chính",
                type: "department",
            },
            {
                id: "60129060-66cb-4c8c-bafc-818a90357664",
                name: "Phòng Quản lý cơ sở vật chất",
                type: "department",
            },
            {
                id: "a25b4e2b-9e9c-4b58-a75a-606f6a16ecb1",
                name: "Khoa Sư phạm và Khoa học cơ bản",
                type: "faculty",
            },
            {
                id: "ffad4d9a-a96d-4bbf-8af8-fc12d5c5e1f9",
                name: "Khoa Kinh tế - Luật",
                type: "faculty",
            },
            {
                id: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                name: "Khoa Kỹ thuật Công nghệ",
                type: "faculty",
            },
            {
                id: "49799427-8b28-4937-a0cd-d47486aea24f",
                name: "Khoa Nông nghiệp và Công nghệ Thực phẩm.",
                type: "faculty",
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
