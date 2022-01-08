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

// Data Validate User
// const data = {
//     isInsider: true,
//     email: "toan0181@tgu.edu.vn",
//     fullName: "Huynh toan asdfasdf",
//     password: "password",
//     passwordAgain: "password",
//     birthday: "2012-12-01",
//     gender: true,
//     phone: "0987654321",
//     address: "Bình Đức, Châu Thành, Tiền Giang",
//     isStudent: true,
//     insiderID: "012312311",
//     workplace: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
//     major: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
// };
