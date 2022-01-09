const multer = require("multer");
const path = require("path");
const convertViToEn = require("./char");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/uploads/tmp/"));
    },
    filename: (req, file, cb) => {
        let { originalname: org } = file;

        let index = org.lastIndexOf(".");
        let filename = convertViToEn(org.substring(0, index));
        let ext = org.substring(index);

        const newName = filename + "_" + Date.now() + ext;
        cb(null, newName);
    },
});
const limits = { fileSize: 5000000 };
const fileFilter = (req, file, cb) => {
    if (["image/jpeg", "image/png"].includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
module.exports.uploadIDCard = multer({ storage, limits, fileFilter });
