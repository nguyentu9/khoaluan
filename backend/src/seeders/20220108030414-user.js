"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("user", [
            {
                id: "30ebad88-67da-49b5-9984-0c0b006032ce",
                fullName: "admin",
                birthday: "1970/1/1",
                gender: 1,
                email: "abc@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0987654321",
                isStudent: false,
                isInsider: true,
                address: "None",
                nationalID: "None",
                issuedDate: "1970/1/1",
                issuedPlace: "None",
                majorID: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "70b23c8d-26b8-49ae-b546-7fc445a35fc5",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "62b20519-a71f-4964-965b-92969f76397a",
                fullName: "Thục Trinh Nguyễn",
                birthday: "1978/1/15",
                gender: 1,
                email: "thuctrinhnguyen@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "6513113251",
                isStudent: false,
                isInsider: true,
                address: "2787 Hồng Quang Plains Apt. 781",
                nationalID: "123654489",
                issuedDate: "1970/1/1",
                issuedPlace: "Công An TG",
                majorID: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "70b23c8d-26b8-49ae-b546-7fc445a35fc5",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "6874845a-1f6c-405f-8057-10e8acd2b45f",
                fullName: "Phượng Vũ Mai",
                birthday: "1987/10/5",
                gender: 0,
                email: "phungmai@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0987654327",
                isStudent: false,
                isInsider: true,
                address: "2787 Hồng Quang Plains Apt. 781",
                nationalID: "123654481",
                issuedDate: "1970/1/1",
                issuedPlace: "Công An TG",
                majorID: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "70b23c8d-26b8-49ae-b546-7fc445a35fc5",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "71781964-2f0a-41cc-b6c9-42e01014d4bc",
                fullName: "Thanh Phương Trần",
                birthday: "1987/10/5",
                gender: 1,
                email: "thanhphuongtran@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0987652321",
                isStudent: true,
                isInsider: true,
                address: "48890 Hồ Green Suite 596",
                nationalID: "121654489",
                issuedDate: "1970/1/1",
                issuedPlace: "Công An TG",
                majorID: "abac87d9-fcf4-49d0-b985-2280b1d3cb83",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "70b23c8d-26b8-49ae-b546-7fc445a35fc5",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "725bab2a-5826-44ef-97f8-70913ad49085",
                fullName: "Huệ Lan Vũ",
                birthday: "1987/10/5",
                gender: 0,
                email: "huelanvu@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0918013225",
                isStudent: true,
                isInsider: true,
                address: "52587 Tân Bình Port Suite 279",
                nationalID: "086494817",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "6d2e4876-ae85-40be-a0c7-595c22eaaec5",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "70b23c8d-26b8-49ae-b546-7fc445a35fc5",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "ecb75b0b-7d6f-467f-ae96-8ad73886d68c",
                fullName: "Phương Lan Hoàng",
                birthday: "1987/12/5",
                gender: 0,
                email: "PhuongLanHoang@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0917335966",
                isStudent: true,
                isInsider: true,
                address: "350 Phùng Ferry Apt. 835",
                nationalID: "689920372",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "c76ffcbc-8672-4794-88d0-6b41ef9dcc77",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "06c259a6-cbf6-4c35-af2b-618ee80a3b6a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "aeb4eddd-fa7f-4379-bd49-f8669230b5ea",
                fullName: "Hồng Khuê Đoàn",
                birthday: "1987/2/5",
                gender: 0,
                email: "hongkhuedoan@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0910973338",
                isStudent: false,
                isInsider: true,
                address: "778 Phương Hạnh Crescent Apt. 810",
                nationalID: "127071578",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "92f158f6-26fa-43cc-9981-b0b2606c17e9",
                degreeID: "a0152c77-b3ea-4501-8d63-2a006577cd87",
                roleID: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "399894ce-4110-4fa1-b2f6-b71279ebe785",
                fullName: "Mỹ Loan Phan",
                birthday: "1982/2/5",
                gender: 0,
                email: "myloanphan@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0919822358",
                isStudent: false,
                isInsider: true,
                address: "055 Đỗ Oval Suite 732",
                nationalID: "816459069",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "c76ffcbc-8672-4794-88d0-6b41ef9dcc77",
                degreeID: "b2b1450e-f3ac-4d3f-ad60-6a3aafb8aeb6",
                roleID: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "2daa9a4c-3afe-40ee-9e74-cff32ce9375a",
                fullName: "Tuấn Trung Ngô",
                birthday: "1989/2/5",
                gender: 1,
                email: "mstuantrungngo@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0910237478",
                isStudent: false,
                isInsider: true,
                address: "055 Đỗ Oval Suite 732",
                nationalID: "922840175",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "0e2ed89a-6b41-4aec-8b6b-5c7869ef3121",
                degreeID: "39eec572-345d-4fdd-bb6a-527726d66e94",
                roleID: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "6dc84838-426f-4cff-bc5f-db334cfe976a",
                fullName: "Thành Công Tăng",
                birthday: "1982/2/5",
                gender: 1,
                email: "thanhcongtang@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0915153476",
                isStudent: false,
                isInsider: true,
                address: "7460 Đặng Harbor Suite 601",
                nationalID: "672699883",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "764bf141-f1ca-410a-a1fd-65b9d4ee5c79",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "bb3e937f-e245-4cbc-8da3-1b8d9ad1e288",
                fullName: "Việt Hùng Lý I",
                birthday: "1983/2/5",
                gender: 1,
                email: "viethunglyi@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0918756275",
                isStudent: false,
                isInsider: true,
                address: "802 Hà My Ways Apt. 311",
                nationalID: "253641930",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "77de2bca-6142-43ae-8ecd-b9ab57c8ee00",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "c0570d50-10c2-449f-afe9-ff129caf7cf0",
                fullName: "Ðức Duy Vương DDS",
                birthday: "1984/2/5",
                gender: 1,
                email: "ducduyvuongdds@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0915846575",
                isStudent: false,
                isInsider: true,
                address: "11639 Tấn Thành Gateway Apt. 169",
                nationalID: "153653519",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "3b87ff69-bfa9-4b93-94fc-39e99935ac2f",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "3a503586-e43c-4d6b-bfca-dba5bcc29d71",
                fullName: "Thất Dũng Mai",
                birthday: "1988/2/5",
                gender: 0,
                email: "thatdungmai@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0915982311",
                isStudent: false,
                isInsider: true,
                address: "2321 Hải Phương Village Suite 519",
                nationalID: "794993532",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "e76eb1d2-fef6-45c9-99c1-ec47930ffeaa",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "68f1344c-1896-46c9-a334-9b45971ad614",
                fullName: "Việt Khang Lê",
                birthday: "1988/2/5",
                gender: 1,
                email: "mrsvietkhangle@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0911236377",
                isStudent: false,
                isInsider: true,
                address: "00622 Lê Shores Apt. 533",
                nationalID: "293278204",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "24129cb5-e14b-4403-a25d-ec29cb3f9b0b",
                degreeID: "3c276de7-524d-41d5-bd88-6cd9cc70834e",
                roleID: "a6e4e3d9-76eb-4cb5-89eb-2088c706dade",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "3947d580-8ef2-4918-a0e0-4b9fb038bebf",
                fullName: "Thu Mai Đặng",
                birthday: "1981/2/5",
                gender: 0,
                email: "thumaidang@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0912115676",
                isStudent: false,
                isInsider: true,
                address: "896 Minh Trang Forest Suite 666",
                nationalID: "088676337",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "7b2a90ac-d865-4791-a4a0-ab34cc62a721",
                roleID: "06c259a6-cbf6-4c35-af2b-618ee80a3b6a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "e52ea468-a8e0-44bc-9cab-533f15144725",
                fullName: "Công Hào Phạm",
                birthday: "1981/2/5",
                gender: 1,
                email: "conghaopham@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0911842143",
                isStudent: false,
                isInsider: true,
                address: "6846 Ánh Linh Lights Apt. 150",
                nationalID: "588249562",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "abac87d9-fcf4-49d0-b985-2280b1d3cb83",
                roleID: "06c259a6-cbf6-4c35-af2b-618ee80a3b6a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "bb7d391e-c15c-4a0a-88c8-1d17382cf6a3",
                fullName: "Nghĩa Hòa Hồ",
                birthday: "1971/2/5",
                gender: 1,
                email: "nghiahoaho@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0919049499",
                isStudent: false,
                isInsider: true,
                address: "725 Hòa Thái Inlet Suite 377",
                nationalID: "605334847",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "eeac4495-c397-4d56-905c-bd6161d4c60c",
                roleID: "06c259a6-cbf6-4c35-af2b-618ee80a3b6a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "106f3bd4-86b9-4c1d-bee4-1f8efadf6713",
                fullName: "Phương Trinh Hồ",
                birthday: "1971/2/5",
                gender: 0,
                email: "msphuongtrinhho@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0918774542",
                isStudent: false,
                isInsider: true,
                address: "628 Đào Branch Apt. 655",
                nationalID: "866413794",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "6d2e4876-ae85-40be-a0c7-595c22eaaec5",
                roleID: "06c259a6-cbf6-4c35-af2b-618ee80a3b6a",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "944113ed-bfcf-4814-ab8d-3f3358f54604",
                fullName: "Ðoan Thanh Đoàn",
                birthday: "1973/2/5",
                gender: 1,
                email: "doanthanhdoan@example.com",
                password:
                    "$2b$10$Zj9rPOMwd87SsfjlkdFOXumCKEhR7xJFpGCb8zlYGJSJzTYiJDNkK",
                phone: "0915153967",
                isStudent: false,
                isInsider: true,
                address: "9574 Trúc Cương Vista Apt. 097",
                nationalID: "719297428",
                issuedDate: "1975/1/1",
                issuedPlace: "Công An TG",
                majorID: "6d2e4876-ae85-40be-a0c7-595c22eaaec5",
                roleID: "06c259a6-cbf6-4c35-af2b-618ee80a3b6a",
                createdAt: new Date(),
                updatedAt: new Date(),
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
