"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // await queryInterface.bulkInsert("topicmember", [
        //     {
        //         id: 1,
        //         topicID: "88ebf964-ca67-4767-a596-4b85075c8037",
        //         userID: "3947d580-8ef2-4918-a0e0-4b9fb038bebf",
        //         topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
        //     },
        //     {
        //         id: 2,
        //         topicID: "88ebf964-ca67-4767-a596-4b85075c8037",
        //         userID: "bb7d391e-c15c-4a0a-88c8-1d17382cf6a3",
        //         topicRoleID: "51eb7852-2396-40eb-8704-f801eb332391",
        //     },
        //     {
        //         id: 3,
        //         topicID: "88ebf964-ca67-4767-a596-4b85075c8037",
        //         userID: "ecb75b0b-7d6f-467f-ae96-8ad73886d68c",
        //         topicRoleID: "d3e64eca-ba95-4acd-9cb1-6573db7c3d1b",
        //     },
        //     {
        //         id: 4,
        //         topicID: "0684d952-0407-4ebe-85f4-6aec61dc5b7e",
        //         userID: "3947d580-8ef2-4918-a0e0-4b9fb038bebf",
        //         topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
        //     },
        //     {
        //         id: 5,
        //         topicID: "0684d952-0407-4ebe-85f4-6aec61dc5b7e",
        //         userID: "ecb75b0b-7d6f-467f-ae96-8ad73886d68c",
        //         topicRoleID: "d3e64eca-ba95-4acd-9cb1-6573db7c3d1b",
        //     },
        //     {
        //         id: 6,
        //         topicID: "0684d952-0407-4ebe-85f4-6aec61dc5b7e",
        //         userID: "71781964-2f0a-41cc-b6c9-42e01014d4bc",
        //         topicRoleID: "c1ca663a-7c68-44fc-a504-55de37b4910f",
        //     },
        //     {
        //         id: 7,
        //         topicID: "d3bed5e0-f12a-4658-b1f7-b796eeac5f51",
        //         userID: "3947d580-8ef2-4918-a0e0-4b9fb038bebf",
        //         topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
        //     },
        //     {
        //         id: 9,
        //         topicID: "d3bed5e0-f12a-4658-b1f7-b796eeac5f51",
        //         userID: "e52ea468-a8e0-44bc-9cab-533f15144725",
        //         topicRoleID: "c1ca663a-7c68-44fc-a504-55de37b4910f",
        //     },
        //     {
        //         id: 10,
        //         topicID: "d3769ba2-d7f1-4f88-9b8e-b71f60f6b839",
        //         userID: "3947d580-8ef2-4918-a0e0-4b9fb038bebf",
        //         topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
        //     },
        //     {
        //         id: 11,
        //         topicID: "d3769ba2-d7f1-4f88-9b8e-b71f60f6b839",
        //         userID: "e52ea468-a8e0-44bc-9cab-533f15144725",
        //         topicRoleID: "d3e64eca-ba95-4acd-9cb1-6573db7c3d1b",
        //     },
        //     {
        //         id: 12,
        //         topicID: "d3769ba2-d7f1-4f88-9b8e-b71f60f6b839",
        //         userID: "bb7d391e-c15c-4a0a-88c8-1d17382cf6a3",
        //         topicRoleID: "c1ca663a-7c68-44fc-a504-55de37b4910f",
        //     },
        // {
        //     id: 13,
        //     topicID: "a4b36a4f-7773-4771-9567-ef20dc84ba2b",
        //     userID: "e52ea468-a8e0-44bc-9cab-533f15144725",
        //     topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
        // },
        // {
        //     id: 14,
        //     topicID: "a4b36a4f-7773-4771-9567-ef20dc84ba2b",
        //     userID: "bb7d391e-c15c-4a0a-88c8-1d17382cf6a3",
        //     topicRoleID: "d3e64eca-ba95-4acd-9cb1-6573db7c3d1b",
        // },
        // {
        //     id: 15,
        //     topicID: "a4b36a4f-7773-4771-9567-ef20dc84ba2b",
        //     userID: "106f3bd4-86b9-4c1d-bee4-1f8efadf6713",
        //     topicRoleID: "c1ca663a-7c68-44fc-a504-55de37b4910f",
        // },
        // {
        //     id: 16,
        //     topicID: "adf4f08a-96ef-47f7-b8ad-230a7773a40e",
        //     userID: "bb7d391e-c15c-4a0a-88c8-1d17382cf6a3",
        //     topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
        // },
        // {
        //     id: 17,
        //     topicID: "adf4f08a-96ef-47f7-b8ad-230a7773a40e",
        //     userID: "106f3bd4-86b9-4c1d-bee4-1f8efadf6713",
        //     topicRoleID: "d3e64eca-ba95-4acd-9cb1-6573db7c3d1b",
        // },
        // {
        //     id: 18,
        //     topicID: "adf4f08a-96ef-47f7-b8ad-230a7773a40e",
        //     userID: "944113ed-bfcf-4814-ab8d-3f3358f54604",
        //     topicRoleID: "c1ca663a-7c68-44fc-a504-55de37b4910f",
        // },
        // {
        //     id: 19,
        //     topicID: "acee5ed7-bbdb-4628-98a9-b5e72692d1a0",
        //     userID: "106f3bd4-86b9-4c1d-bee4-1f8efadf6713",
        //     topicRoleID: "3a259543-e7b9-4137-9a4f-7df800050cf4",
        // },
        // {
        //     id: 20,
        //     topicID: "acee5ed7-bbdb-4628-98a9-b5e72692d1a0",
        //     userID: "944113ed-bfcf-4814-ab8d-3f3358f54604",
        //     topicRoleID: "d3e64eca-ba95-4acd-9cb1-6573db7c3d1b",
        // },
        // {
        //     id: 21,
        //     topicID: "acee5ed7-bbdb-4628-98a9-b5e72692d1a0",
        //     userID: "725bab2a-5826-44ef-97f8-70913ad49085",
        //     topicRoleID: "c1ca663a-7c68-44fc-a504-55de37b4910f",
        // },
        // ]);
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
