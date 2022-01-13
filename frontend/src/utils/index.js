import Joi from "joi";
import messagesVN from "../constant/validationMsg";
export const isValidPhone = (phone) =>
    /(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g.test(
        phone
    );

// export const validateUserSignIn = (user) => {
//     const schema = Joi.object()
//         .keys({
//             isInsider: Joi.boolean().required().messages(messagesVN),
//             email: Joi.alternatives()
//                 .conditional("isInsider", [
//                     {
//                         is: true,
//                         then: Joi.string()
//                             .email({ tlds: { allow: false } })
//                             .trim()
//                             .label("Email")
//                             .regex(/^[A-Za-z0-9._%+-]+@tgu.edu.vn$/)
//                             .max(40)
//                             .required()
//                             .messages({
//                                 ...messagesVN,
//                                 "string.pattern.base":
//                                     "Email không hợp lệ. Vui lòng dùng email của TGU",
//                             }),
//                     },
//                     {
//                         is: false,
//                         then: Joi.string()
//                             .label("Email")
//                             .trim()
//                             .email({ tlds: { allow: false } })
//                             .max(40)
//                             .required()
//                             .messages(messagesVN),
//                     },
//                 ])
//                 .required()
//                 .messages(messagesVN),
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
//                 .messages({
//                     ...messagesVN,
//                     "any.only": "Mật khẩu không khớp",
//                 }),
//             fullName: Joi.string()
//                 .trim()
//                 .min(5)
//                 .max(40)
//                 .label("Họ tên")
//                 .required()
//                 .messages(messagesVN),
//             birthday: Joi.date()
//                 .label("Ngày sinh")
//                 .less(Date.now())
//                 .required()
//                 .messages({
//                     ...messagesVN,
//                     "date.less": "Ngày sinh phải nhỏ hơn ngày hiện tại",
//                     "date.format": "Ngày sinh phải ở định dạng YYYY-MM-DD",
//                 }),
//             gender: Joi.number()
//                 .label("Giới tính")
//                 .valid(0, 1)
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
//             isStudent: Joi.number().when("isInsider", {
//                 is: true,
//                 then: Joi.required()
//                     .valid(0, 1)
//                     .messages({
//                         ...messagesVN,
//                         "boolean.base": "Vai trò không hợp lệ",
//                     }),
//             }),
//             insiderID: Joi.alternatives().conditional("isInsider", [
//                 {
//                     is: true,
//                     then: Joi.when("isStudent", {
//                         is: false,
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
//                 {
//                     is: false,
//                     then: Joi.string().allow(null),
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
//                     .label("CMND/CCCD")
//                     .required()
//                     .messages(messagesVN),
//             }),
//             issuedDate: Joi.date()
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
//     if (
//         typeof user?.isInsider === "string" &&
//         (user?.isInsider === "false" || user?.isInsider === "0")
//     ) {
//         user.isInsider = false;
//     } else user.isInsider = true;

//     const { error } = schema.validate(user, {
//         abortEarly: true,
//     });

//     if (!error) return null;
//     const errors = {};
//     for (let item of error.details) errors[item.path[0]] = item.message;
//     return errors;
// };
