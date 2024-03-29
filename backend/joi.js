const Joi = require("joi").extend(require("@joi/date"));
const messagesVN = require("./src/constant/validationMsg");

// const data = {
//     username: "abc123",
//     // password: "password",
//     repeat_password: "password",
//     birth_year: 1994,
//     email: "asdfas@gmail.com",
// };
// const schema = Joi.object({
//     username: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required()
//         .messages(messagesVN),
//     password: Joi.string()
//         .pattern(/^[a-zA-Z0-9]{8,30}$/)
//         .label("Mật khẩu")
//         .required()
//         .messages({ ...messagesVN, "string.pattern.base": "Lỗi" }),
//     repeat_password: Joi.string()
//         .required()
//         .valid(Joi.ref("password"))
//         .messages({ "any.only": "Mật khẩu không khớp" }),
//     email: Joi.string()
//         .email()
//         .when('')
//         .pattern(
//             /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(tgu.edu)\.vn$/g
//         ),
// });

// async function fun() {
//     try {
//         const valid = await schema.validateAsync(data, { abortEarly: true });
//         console.log(valid);
//     } catch (err) {
//         console.log(
//             err.details.map((e) => ({
//                 key: e.context.key,
//                 message: e.message,
//             }))
//         );
//         // console.log(JSON.stringify(err));
//     }
// }

// Validate user schema
// const data = {
//     isInsider: true,
//     email: "toan0181@tgu.edu.vn",
//     fullName: "Huynh toan asdfasdf",
//     password: "password",
//     passwordAgain: "password",
//     birthday: "2000-12-01",
//     gender: true,
//     phone: "0987654321",
//     address: "Bình Đức, Châu Thành, Tiền Giang",
//     isStudent: true,
//     insiderID: "012312311",
//     workplace: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
//     majorID: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
//     nationalID: "012345678",
//     issuedDate: "2020-12-01",
//     issuedPlace: "Công an TG",
//     haveABankNum: true,
//     bankNumber: "123456789012",
//     bankBranch: "1231231",
//     a: "123",
// };
// async function fun(user) {
//     const schema = Joi.object()
//         .keys({
//             isInsider: Joi.boolean().required().messages(messagesVN),
//             email: Joi.alternatives().conditional("isInsider", [
//                 {
//                     is: true,
//                     then: Joi.string()
//                         .trim()
//                         .label("Email")
//                         .email()
//                         .regex(/^[A-Za-z0-9._%+-]+@tgu.edu.vn$/)
//                         .max(40)
//                         .required()
//                         .messages({
//                             ...messagesVN,
//                             "string.pattern.base":
//                                 "Email không hợp lệ. Vui lòng dùng email của TGU",
//                         }),
//                 },
//                 {
//                     is: false,
//                     then: Joi.string()
//                         .label("Email")
//                         .trim()
//                         .email()
//                         .max(40)
//                         .required()
//                         .messages(messagesVN),
//                 },
//             ]),
//             password: Joi.string()
//                 .min(8)
//                 .max(30)
//                 .label("Mật khẩu")
//                 .required()
//                 .messages(messagesVN),
//             passwordAgain: Joi.string()
//                 .required()
//                 .label("Mật khẩu nhập lại")
//                 .valid(Joi.ref("password"))
//                 .messages({ ...messagesVN, "any.only": "Mật khẩu không khớp" }),
//             fullName: Joi.string()
//                 .trim()
//                 .min(5)
//                 .max(40)
//                 .label("Họ tên")
//                 .required()
//                 .messages(messagesVN),
//             birthday: Joi.date()
//                 .label("Ngày sinh")
//                 .format("YYYY-MM-DD")
//                 .utc()
//                 .less(Date.now())
//                 .required()
//                 .messages({
//                     ...messagesVN,
//                     "date.less": "Ngày sinh phải nhỏ hơn ngày hiện tại",
//                     "date.format": "Ngày sinh phải ở định dạng YYYY-MM-DD",
//                 }),
//             gender: Joi.boolean()
//                 .label("Giới tính")
//                 .required()
//                 .messages({
//                     ...messagesVN,
//                     "boolean.base": "Giới tính không hợp lệ",
//                 }),
//             phone: Joi.string()
//                 .label("Số điện thoại")
//                 .trim()
//                 .max(10)
//                 .regex(/((09|03|07|08|05)+([0-9]{8})\b)/)
//                 .required()
//                 .messages({
//                     ...messagesVN,
//                     "string.pattern.base": "Số điện thoại không hợp lệ",
//                 }),
//             address: Joi.string()
//                 .trim()
//                 .max(100)
//                 .label("Địa chỉ")
//                 .required()
//                 .messages(messagesVN),
//             isStudent: Joi.boolean().when("isInsider", {
//                 is: true,
//                 then: Joi.required().messages({
//                     ...messagesVN,
//                     "boolean.base": "Vai trò không hợp lệ",
//                 }),
//             }),
//             insiderID: Joi.alternatives().conditional("isInsider", [
//                 {
//                     is: true,
//                     then: Joi.when("isStudent", {
//                         is: Joi.valid(false),
//                         then: Joi.string()
//                             .trim()
//                             .regex(/^(T52-[0-9]{7})$/)
//                             .required()
//                             .messages({
//                                 ...messagesVN,
//                                 "string.pattern.base":
//                                     "Mã số cán bộ không hợp lệ",
//                             }),
//                         otherwise: Joi.string()
//                             .trim()
//                             .regex(/^0[0-9]{8}$/)
//                             .required()
//                             .messages({
//                                 ...messagesVN,
//                                 "string.pattern.base":
//                                     "Mã số sinh viên không hợp lệ",
//                             }),
//                     }),
//                 },
//             ]),
//             workplace: Joi.string()
//                 .trim()
//                 .label("Đơn vị công tác")
//                 .when("isInsider", {
//                     is: true,
//                     then: Joi.string()
//                         .trim()
//                         .max(36)
//                         .guid({ version: "uuidv4" })
//                         .required()
//                         .messages(messagesVN),
//                 })
//                 .messages(messagesVN),
//             major: Joi.string()
//                 .label("Chuyên ngành")
//                 .required()
//                 .trim()
//                 .max(36)
//                 .guid({ version: "uuidv4" })
//                 .messages(messagesVN),
//             degree: Joi.string()
//                 .label("Học hàm - Học vị")
//                 .when("isStudent", {
//                     is: false,
//                     then: Joi.string()
//                         .trim()
//                         .max(36)
//                         .guid({ version: "uuidv4" })
//                         .required()
//                         .messages(messagesVN),
//                 }),
//             scientificTitle: Joi.string()
//                 .label("Chức danh khoa học")
//                 .max(50)
//                 .messages(messagesVN),
//             jobTitle: Joi.string()
//                 .label("Chức vụ")
//                 .trim()
//                 .max(36)
//                 .guid({ version: "uuidv4" })
//                 .messages(messagesVN),
//             workplaceOutside: Joi.string()
//                 .label("Đơn vị công tác")
//                 .when("isInsider", {
//                     is: false,
//                     then: Joi.string()
//                         .trim()
//                         .min(5)
//                         .max(50)
//                         .required()
//                         .messages(messagesVN),
//                 }),
//             nationalID: Joi.string()
//                 .label("Chứng minh nhân dân")
//                 .trim()
//                 .min(9)
//                 .max(12)
//                 .regex(/^(\b(\d{9})\b|\b(\d{12})\b)$/)
//                 .required()
//                 .messages({
//                     ...messagesVN,
//                     "string.pattern.base":
//                         "CMND/CCCD phải là 9 hoặc 12 ký tự số",
//                 }),
//             nationalIDImg: Joi.string().when("isInsider", {
//                 is: false,
//                 then: Joi.string()
//                     .label(" CMND/CCCD")
//                     .required()
//                     .messages(messagesVN),
//             }),
//             issuedDate: Joi.date()
//                 .format("YYYY-MM-DD")
//                 .utc()
//                 .label("Ngày cấp")
//                 .greater(Joi.ref("birthday"))
//                 .less("now")
//                 .required()
//                 .messages({
//                     ...messagesVN,
//                     "date.greater": "Ngày cấp phải nhỏ hơn ngày sinh",
//                     "date.format": "Ngày cấp phải ở định dạng YYYY-MM-DD",
//                 }),
//             issuedPlace: Joi.string()
//                 .label("Nơi cấp")
//                 .trim()
//                 .min(5)
//                 .max(30)
//                 .required()
//                 .messages(messagesVN),
//             frontSideIDcard: Joi.string().when("isInsider", {
//                 is: false,
//                 then: Joi.string()
//                     .label("Mặt trước CMND/CCCD")
//                     .required()
//                     .messages(messagesVN),
//             }),
//             backSideIDcard: Joi.string().when("isInsider", {
//                 is: false,
//                 then: Joi.string()
//                     .label("Mặt sau CMND/CCCD")
//                     .required()
//                     .messages(messagesVN),
//             }),
//             haveABankNum: Joi.boolean().required().messages(messagesVN),
//             bankNumber: Joi.string().when("haveABankNum", {
//                 is: true,
//                 then: Joi.string()
//                     .trim()
//                     .label("Số tài khoản")
//                     .regex(/^(\d)+$/)
//                     .max(12)
//                     .required()
//                     .messages({
//                         ...messagesVN,
//                         "string.pattern.base":
//                             "Số tài khoản phải là chuỗi ký tự số",
//                     }),
//             }),
//             bankBranch: Joi.string().when("haveABankNum", {
//                 is: true,
//                 then: Joi.string()
//                     .trim()
//                     .alphanum()
//                     .label("Chi nhánh ngân hàng")
//                     .max(50)
//                     .required()
//                     .messages(messagesVN),
//             }),
//         })
//         .unknown(true);
//     try {
//         const userValid = await schema.validateAsync(user, {
//             abortEarly: true,
//         });
//         console.log(userValid);
//         // return userValid;
//     } catch (err) {
//         let errorArr = err.details.map((e) => ({
//             key: e.context.key,
//             message: e.message,
//         }));
//         console.log(JSON.stringify(err));
//         // console.log(errorArr);
//         // return {
//         //     errors: errorArr,
//         // };
//     }
// }

// fun(data);

// const user = {
//     isInsider: false,
//     email: "toan0181@tgu.edu.vn",
//     password: "password",
//     passwordAgain: "password",
// };

// const validateUserSignIn = (user) => {
//     const schema = Joi.object().keys({
//         isInsider: Joi.boolean().required().messages(messagesVN),
//         email: Joi.alternatives()
//             .conditional("isInsider", [
//                 {
//                     is: true,
//                     then: Joi.string()
//                         .email({ tlds: { allow: false } })
//                         .trim()
//                         .label("Email")
//                         .regex(/^[A-Za-z0-9._%+-]+@tgu.edu.vn$/)
//                         .max(40)
//                         .required()
//                         .messages({
//                             ...messagesVN,
//                             "string.pattern.base":
//                                 "Email không hợp lệ. Vui lòng dùng email của TGU",
//                         }),
//                 },
//                 {
//                     is: false,
//                     then: Joi.string()
//                         .label("Email")
//                         .trim()
//                         .invalid(/^\w+@tgu.edu.vn$/)
//                         .email({ tlds: { allow: false } })
//                         .max(40)
//                         .required()
//                         .messages(messagesVN),
//                 },
//             ])
//             .required()
//             .messages(messagesVN),
//         password: Joi.string()
//             .min(8)
//             .max(30)
//             .label("Mật khẩu")
//             .required()
//             .messages(messagesVN),
//         passwordAgain: Joi.string()
//             .required()
//             .label("Mật khẩu nhập lại")
//             .valid(Joi.ref("password"))
//             .messages({
//                 ...messagesVN,
//                 "any.only": "Mật khẩu không khớp",
//             }),
//     });

//     const { error } = schema.validate(user, {
//         abortEarly: true,
//     });

//     if (!error) return null;
//     const errors = {};
//     for (let item of error.details) errors[item.path[0]] = item.message;
//     return errors;
// };
// let a = validateUserSignIn(user);

const user = {
    isInsider: true,
    isStudent: true,
    degree: "",
    insiderID: "018101059",
    jobTitle: "00000000-0000-0000-0000-000000000000",
    major: "3b87ff69-bfa9-4b93-94fc-39e99935ac2f",
    scientificTitle: "",
    workplace: "",
    workplaceOutside: "",
};

const validateUserSignUp = (user) => {
    const schema = Joi.object().keys({
        isInsider: Joi.boolean().required(),
        isStudent: Joi.boolean().required(),
        insiderID: Joi.alternatives()
            .conditional("isInsider", [
                {
                    is: true,
                    then: Joi.when("isStudent", {
                        is: false,
                        then: Joi.string()
                            .trim()
                            .regex(/^(T52-[0-9]{7})$/)
                            .required()
                            .messages({
                                ...messagesVN,
                                "string.pattern.base":
                                    "Mã số cán bộ không hợp lệ",
                            }),
                        otherwise: Joi.string()
                            .trim()
                            .regex(/^0[0-9]{8}$/)
                            .required()
                            .messages({
                                ...messagesVN,
                                "string.pattern.base":
                                    "Mã số sinh viên không hợp lệ",
                            }),
                    }),
                },
                {
                    is: false,
                    then: Joi.allow(null),
                },
            ])
            .label("Mã số")
            .messages(messagesVN),
        workplace: Joi.string()
            .label("Đơn vị công tác")
            .allow("")
            .when("isInsider", {
                is: true,
                then: Joi.allow(null),
                otherwise: Joi.string()
                    .required()
                    .trim()
                    .max(36)
                    .guid({ version: "uuidv4" }),
            })
            .messages(messagesVN),
        major: Joi.string()
            .label("Chuyên ngành")
            .required()
            .trim()
            .max(36)
            .guid({ version: "uuidv4" })
            .messages(messagesVN),
        degree: Joi.string()
            .label("Học hàm - Học vị")
            .allow("")
            .when("isStudent", {
                is: false,
                then: Joi.string()
                    .trim()
                    .max(36)
                    .guid({ version: "uuidv4" })
                    .required()
                    .messages(messagesVN),
            }),
        scientificTitle: Joi.string()
            .label("Chức danh khoa học")
            .max(50)
            .allow("")
            .messages(messagesVN),
        jobTitle: Joi.string()
            .label("Chức vụ")
            .trim()
            .allow("")
            .messages(messagesVN),
        workplaceOutside: Joi.string()
            .label("Đơn vị công tác")
            .allow(null)
            .trim()
            .min(5)
            .max(50)
            .required()
            .when("isInsider", {
                is: true,
                then: Joi.allow("").messages(messagesVN),
            }),
    });

    const { error } = schema.validate(user, {
        abortEarly: true,
    });

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
};

let a = validateUserSignUp(user);
console.log(a);
