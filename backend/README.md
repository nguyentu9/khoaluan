## Người dùng đăng nhập (Sinh viên, cán bộ)

-   Đăng nhập
    <br/>
    `POST /auth/login`

-   Đăng ký
    <br/>
    `POST /auth/register`

-   Đăng xuất
    <br/>
    `POST /auth/logout`
-   Kiểm tra cookie session có hợp lệ
<br/>
`POST /api/auth/validuser`
<hr/>

## Dashboard

-   Xem thông báo
    <br/>
    `GET /notifications`

-   Xem thống tin cá nhân
    <br/>
    `GET /users/me/profile`

-   Sửa thông tin cá nhân
    <br/>
    `PUT /users/me/profile`

-   Đổi mật khẩu
    <br/>
    `PUT /users/me/password`

-   Xem hoạt động - các việc cần thực hiện (lấy về 2 hoạt động)
    <br/>
    `GET /users/me/activities`
    <br/>

    ```
    Mô tả:
    - Đọc cookie lấy userId
    ```

    ```js
    Response:
    {
        title ,// tiêu đề hoạt động
        description, // mô tả
        deadline, // thời hạn
    }
    ```

-   Thống kê đề tài cá nhân
    <br/>
    `GET /topics/statistic`

    ```
    Mô tả:
    - Thống kê các thông tin đề tài: tổng số, hoàn thành, đang thực hiện, đã huỷ
    ```

-   Đề tài gần đây
    <br/>
    `GET /topics/me?recently=true`
    ```
    Mô tả:
    - Lấy về 3 đề tài mới nhất
    ```

========================

## Đăng ký đề tài

-   Lấy về các ràng buộc đề tài
    <br/>
    `GET /topics/constraints`

```
Mô tả:
- Lấy những ràng buộc đề tài trước khi đăng ký
```

```js
    Response:
    {
        funding:[], // Kinh phí,
        fundingOptions: {
            maxValue: 70000000,
            minValue: 30000000,
            compareMethod: 'between' // or 'only'
        },
        time_duration:[], // Thời gian thực hiện
        time_duration_options: {
            maxValue: 18,
            minValue: 3,
            compareMethod: 'between' // or 'only'
        },
    }
```

-   Lấy ra những lĩnh vực đề (chuyên ngành)
    <br/>
    `GET /majors`

-   Lấy ra những vai trò trong đề tài
    <br/>
    `GET /topics/roles`

-   Submit đề tài
    <br/>
    `POST /topics`
    ```
    Mô tả:
    ```
-   ## TODO: Cần thiết kế API thêm thành viên đề tài

========================

## Đề tài của tôi:

-   Lấy danh sách đề tài cá nhân
    <br/>
    `GET /topics/me`

    ```json
    Response:
    {
        topics: [
            {
                id,
                name, // tên đề tài
                role, // vai trò trong đề tài
                status, // trạng thái của đề tài
            },
            ...
        ],
        total_pages, // tổng số đề tài,
        page, // trang hiện tại
        per_page, // số đề tài mỗi trang
    }
    ```

    (áp dụng phân trang)
    <br/>
    `GET /topics/me?page=1&per_page=5`
    <br/>

    (áp dụng bộ lọc)
    <br/>
    `GET /topics/me?status=ID&createdTime=`
    <br/>
    `GET /topics/me?status=ID&createdStartTime=xxx&createdEndTime=xxx`
    <br/>

========================

## Quản lý tài khoản: (cho tài khoản ADMIN)

### Lấy danh sách người dùng

-   Đang hoạt động
    <br/>
    `GET /users?active=true`

-   Bị khoá tài khoản
    <br/>
    `GET /users?inactive=true`

-   Người dùng bên ngoài
    <br/>
    `GET /users?external=true`

-   Người dùng bên trong trường
    <br/>
    `GET /users?internal=true`

========================

## Thông tin đề tài:

-   Tab: thông tin chung:

```js
Response
{
    tên đề tài,
    ngày đăng ký,
    thời gian thực hiện,
    kinh phí thực hiện,
    số tiền tạm ứng,
    ngày tạm ứng,
    từ khoá,
    lĩnh vực đề tài,
    người hướng dẫn (nếu là chủ nhiệm sinh viên),
    các thành viên đề tài,
    trạng thái đề tài
}
```

-   Tab: Yêu cầu

## TODO: Tab Yêu cầu chưu thiết kế API

-   Tab: Yêu cầu
-   Tab: Tài liệu
-   Tab: Hoạt động

-   Tab: Hội đồng (chỉ thành viên trong hội đồng,
    trưởng phòng, p.trưởng phòng, trưởng khoa, p.trưởng phòng có thể xem)

```js
Response
{
    members: {
        { },
        ...
    },
    forms: [
        {
            name, // tên biểu mẩu


        }
    ]

}
```

========================

## Trạng thái đề tài:

    "Chờ Xử Lý", (Sau khi chủ nhiệm gửi đề tài)
    "Đã Phê Duyệt", (Sau khi Trưởng Khoa/Phó Trưởng Khoa duyệt đề tài)

    "Đang Lập HĐ Tư Vấn", (Sau khi chuyên viên khoa, trưởng bộ môn lập HĐ tư vấn)
    "Đã Lập HĐ Tư Vấn", (Sau khi Trưởng Khoa/Phó Trưởng Khoa duyệt hội đồng)
    "Hoàn Thành Tư Vấn", (sau khi chủ tịch hội đồng chọn đồng ý, đề tài đạt)

    "Đang Lập HĐ Xét Duyệt", (Sau khi chuyên viên PQLKH lập HĐ tư vấn )
    "Đã Lập HĐ Xét Duyệt", (Sau khi Trưởng Phòng/Phó Trưởng Phòng QLKH duyệt hội đồng)
    "Hoàn Thành Xét Duyệt", (sau khi chủ tịch hội đồng chọn đồng ý, đề tài đạt)

    "Đang Lập HĐ Nghiệm Thu",(Sau khi chuyên viên PQLKH lập HĐ tư vấn )
    "Đã Lập HĐ Nghiệm Thu",(Sau khi Trưởng Phòng/Phó Trưởng Phòng QLKH duyệt hội đồng)
    "Hoàn Thành Nghiệm Thu",(sau khi chủ tịch hội đồng chọn đồng ý, đề tài đạt)

    "Hoàn Thành Đề Tài", (sau khi chuyên viên PQLKH lập HĐ tư vấn)
    "Bị Từ Chối", (Trưởng Khoa/ P.Trưởng Khoa từ chối khi phê duyệt, Chủ Tịch Hội Đồng chọn ko đồng ý)
    "Tự Huỷ Đề Tài", (Sau khi Chủ nhiệm đăng ký thành công có thể chọn huỷ)
