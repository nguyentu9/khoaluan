exports.topicRoles = [
    {
        id: "chunhiem",
        name: "Chủ Nhiệm",
    },
    {
        id: "dongchunhiem",
        name: "Đồng Chủ Nhiệm",
    },
    {
        id: "thanhvienthuchienchinh",
        name: "Thành Viên Thực Hiện Chính",
    },
    {
        id: "thanhvien",
        name: "Thành Viên",
        code: "thanhvien",
    },
];

exports.topicStatus = [
    { id: 1, name: "Chờ Xử Lý", nextStatus: 2 },
    { id: 2, name: "Đã Phê Duyệt", nextStatus: 3 },
    { id: 3, name: "Đang Lập HĐ Tư Vấn", nextStatus: 4 },
    { id: 4, name: "Đã Lập HĐ Tư Vấn", nextStatus: 5 },
];
