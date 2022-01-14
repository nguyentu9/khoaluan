"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("topicmember", [
            {
                id: 1,
                topicID: "5b5b5c80-e606-441e-9fd5-695d9e756192",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 2,
                topicID: "5909e5dd-ad14-406e-945d-66b7a4663a85",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 3,
                topicID: "423ca9b9-4cd0-49ea-b5b1-7fab7b0f3b0c",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 4,
                topicID: "719d350a-e2ea-4891-82f0-c3fb66b0447a",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 5,
                topicID: "a074c2e9-a773-402d-b5a5-e58b50a858ca",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 6,
                topicID: "0d292b13-b452-4b4f-b332-20ad8732ab6d",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 7,
                topicID: "ea057b5c-cf7f-4f63-be11-8d18265155f4",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 8,
                topicID: "c09e3ef2-eec9-4710-a66c-72d39687571e",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 9,
                topicID: "4fe68951-cb58-4a8f-a1b3-4b18ce9597c6",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
            },
            {
                id: 10,
                topicID: "d092c522-5a03-4e9b-b4c0-ddf6ffc8b7ea",
                userID: "34da331e-37af-45a8-8378-2fa8a4a30b06",
                topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
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
