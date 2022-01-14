"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("workplace", [
            // sinh vieen
            {
                id: 1,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                insiderID: "018101000",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 2,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "699b2060-a221-4135-a424-b387c8645add",
                insiderID: "018101001",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 3,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "b75109af-003b-440d-8531-ebac80a0f3bb",
                insiderID: "018101002",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 4,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "37a2096a-0763-4569-9527-2ff771ec53f6",
                insiderID: "018101003",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 5,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "55c43603-31a9-4b67-b0da-f0a394c9f0ac",
                insiderID: "018101004",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 6,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "cf1f2e59-8b53-4772-bca0-86a5887b1f63",
                insiderID: "018101005",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 7,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "2893efb4-6e95-49a0-9b7e-cac368059c00",
                insiderID: "018101006",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 8,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "5c76e9ea-3a34-4e8d-ab8e-4b3d0d00d470",
                insiderID: "018101007",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 9,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "fc6bf3c4-8049-4070-ab7e-6d251dd5b511",
                insiderID: "018101008",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
            },
            {
                id: 10,
                facdeptID: "1c49c22e-6b63-475f-b8f0-c3d7861f77c4",
                userID: "1c205b3f-2a42-448f-b739-24b2623ce849",
                insiderID: "018101009",
                isHeadOfDept: false,
                isDeputyOfDept: false,
                isStudent: true,
                isStaff: false,
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
