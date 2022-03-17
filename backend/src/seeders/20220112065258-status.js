"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // await queryInterface.bulkInsert("status", [
        //     {
        //         id: 1,
        //         name: "Chờ Xử Lý",
        //         nextStatus: 2,
        //     },
        //     {
        //         id: 2,
        //         name: "Đã Phê Duyệt",
        //         nextStatus: 3,
        //     },
        //     {
        //         id: 3,
        //         name: "Đang Lập HĐ Tư Vấn",
        //         nextStatus: 4,
        //     },
        //     {
        //         id: 4,
        //         name: "Đã Lập HĐ Tư Vấn",
        //         nextStatus: 5,
        //     },
        //     {
        //         id: 5,
        //         name: "Hoàn Thành Tư Vấn",
        //         nextStatus: 6,
        //     },
        //     {
        //         id: 6,
        //         name: "Đang Lập HĐ Xét Duyệt",
        //         nextStatus: 7,
        //     },
        //     {
        //         id: 7,
        //         name: "Đã Lập HĐ Xét Duyệt",
        //         nextStatus: 8,
        //     },
        //     {
        //         id: 8,
        //         name: "Hoàn Thành Xét Duyệt",
        //         nextStatus: 9,
        //     },
        //     {
        //         id: 9,
        //         name: "Đang Lập HĐ Nghiệm Thu",
        //         nextStatus: 10,
        //     },
        //     {
        //         id: 10,
        //         name: "Đã Lập HĐ Nghiệm Thu",
        //         nextStatus: 11,
        //     },
        //     {
        //         id: 11,
        //         name: "Hoàn Thành Nghiệm Thu",
        //     },
        //     { id: 12, name: "Bị Từ Chối" },
        //     {
        //         id: 13,
        //         name: "Tự Huỷ Đề Tài",
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
