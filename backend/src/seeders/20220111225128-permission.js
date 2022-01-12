"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("permission", [
            {
                id: "a938e062-58e2-4123-a1d7-af191bc78d89",
                name: "Tạo Tài Khoản",
                code: "POST:users",
                desc: "",
            },
            {
                id: "98af257a-288b-45c3-8b38-10d460e7e11e",
                name: "Xem Thông Tin Tài Khoản",
                code: "GET:users",
                desc: "",
            },
            {
                id: "d174d4a9-0aa0-4e29-b823-5101fd4a2b31",
                name: "Sửa Thông Tin Tài Khoản",
                code: "PUT:users",
                desc: "",
            },
            {
                id: "073f747d-e659-424d-a474-c21e49094824",
                name: "Khoá Tài Khoản",
                code: "PUT:users:isActive",
                desc: "",
            },
            {
                id: "15b08ff7-85dc-4751-8bd3-f25f956c0105",
                name: "Phân Quyền Tài Khoản",
                code: "PUT:users:userRole",
                desc: "",
            },
            {
                id: "0961d06e-2ca4-4898-bcf3-27c54b7c99f3",
                name: "Đăng Ký Đề Tài",
                code: "POST:topics",
                desc: "",
            },
            {
                id: "6cb1afe0-9d33-4a65-b606-63d6ab4f3d9d",
                name: "Xem Đề Tài Đã Thực Hiện",
                code: "GET:topics/me",
                desc: "Xem những đề tài đã đăng ký với vai trò Chủ nhiệm",
            },
            {
                id: "4b93eb92-773c-4ab5-a83f-e3cae0b2f2b2",
                name: "Xem Đề Tài Cùng Thực Hiện",
                code: "GET:topics/participate",
                desc: "Xem những đề tài đã đăng ký với vai trò Tham gia",
            },
            {
                id: "25417bf3-7cb8-4fb0-9bba-3314e33687a4",
                name: "Xem Đề Tài Cấp Khoa",
                code: "GET:topics/faculty",
                desc: "Xem danh sách đề tài trong khoa",
            },
            {
                id: "335caa4f-5d0d-44c0-bab5-8e74bf3cc8e7",
                name: "Xem Đề Tài Cấp Trường",
                code: "GET:topics",
                desc: "Xem danh sách đề tài toàn trường",
            },
            {
                id: "290032e5-2255-45f9-9a0e-8bc3466a8c03",
                name: "Duyệt Đề Tài Cấp Khoa",
                code: "PUT:topics/faculty:accept",
                desc: "Thao tác duyệt đề tài do cá nhân trong một Khoa gửi",
            },
            {
                id: "3f5dcc4e-08ca-4ccb-a52b-4f9f31abdfd8",
                name: "Duyệt Đề Tài [Lãnh Đạo Khoa]",
                code: "PUT:topics/faculty:lead:accept",
                desc: "Thao tác duyệt đề tài do Lãnh Đạo Khoa đăng ký",
            },
            {
                id: "b3522c95-1ae2-486f-b845-b4d83c7a3e1e",
                name: "Thống Kê Đề Tài Cấp Khoa",
                code: "GET:topics/faculty:statistics",
                desc: "Thống kê đề tài trong khoa",
            },
            {
                id: "8702c172-0c39-4ed2-932d-13dae096633d",
                name: "Thống Kê Đề Tài Cấp Trường",
                code: "GET:topics:statistics",
                desc: "Thống kê đề tài toàn trường",
            },
            {
                id: "b64e370c-90e4-451c-b767-50ef9dfd49e3",
                name: "Lập HĐ Tư Vấn",
                code: "POST:council/counselling",
                desc: "Lập Hội Đồng Tư Vấn",
            },
            {
                id: "50a0159b-7801-40e8-8e68-3a4ed3327834",
                name: "Lập HĐ Xét Duyệt",
                code: "POST:council/approval",
                desc: "Lập Hội Đồng Xét Duyệt",
            },
            {
                id: "3601e22d-9a7b-423c-8163-7ab38a697c2f",
                name: "Lập HĐ Nghiệm Thu",
                code: "POST:council/acceptance",
                desc: "Lập Hội Đồng Xét Duyệt",
            },
            {
                id: "7b28d2a1-0383-49e0-8872-d32a0bede33a",
                name: "Xem Hội Đồng Đã Tham Gia",
                code: "GET:council/participate",
                desc: "Xem những đề tài đã đăng ký với vai trò Tham gia",
            },
            {
                id: "41602102-3865-49db-871c-0270df944126",
                name: "Phê Duyệt HĐ Tư Vấn",
                code: "PUT:council/counselling",
                desc: "Phê Duyệt Hội Đồng Tư Vấn",
            },
            {
                id: "a7e69ac1-e245-4901-a811-b941fc33c639",
                name: "Phê Duyệt HĐ Xét Duyệt",
                code: "PUT:council/approval",
                desc: "Phê Duyệt Hội Đồng Xét Duyệt",
            },
            {
                id: "d3becb30-0d4b-4bc4-bb4d-ab371a2effac",
                name: "Phê Duyệt HĐ Nghiệm Thu",
                code: "PUT:council/acceptance",
                desc: "Phê Duyệt Hội Đồng Nghiệm Thu",
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
