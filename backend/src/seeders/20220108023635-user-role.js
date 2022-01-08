"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("userrole", [
            {
                id: "70b23c8d-26b8-49ae-b546-7fc445a35fc5",
                name: "Admin",
                code: "admin",
            },
            {
                id: "06c259a6-cbf6-4c35-af2b-618ee80a3b6a",
                name: "Sinh Viên",
                code: "sinhvien",
            },
            {
                id: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                name: "Cán Bộ",
                code: "canbo",
            },
            {
                id: "1e3d8f9b-9486-4fe6-acd6-2021b0fe2327",
                name: "Trưởng Khoa",
                code: "truongkhoa",
            },
            {
                id: "be295839-8957-4e6e-8270-9a56a52afa13",
                name: "Phó Khoa",
                code: "phokhoa",
            },
            {
                id: "792d7b0f-8dc1-4a0d-b9a2-dc8213813f70",
                name: "Chuyên Viên Khoa",
                code: "chuyenvienkhoa",
            },
            {
                id: "e4adc89a-93e6-4d55-b595-82397c7b0439",
                name: "Trưởng Phòng QLKH",
                code: "truongphong",
            },
            {
                id: "bf47fbe8-4c2d-4362-8990-cfbba2923fd7",
                name: "Phó Phòng QLKH",
                code: "phophong",
            },
            {
                id: "5abd9d2b-a19c-4137-bf56-474316df5504",
                name: "Chuyên Viên Phòng QLKH",
                code: "chuyenvienphong",
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
