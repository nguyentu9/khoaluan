"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("topic", [
            {
                id: "5b5b5c80-e606-441e-9fd5-695d9e756192",
                name: "Dolorem totam harum.",
                registrationDate: "2022/6/4",
                duration: 12,
                totalExpense: 10000000,
                majorID: "ae15f6a4-e83d-4007-9b1d-4a2eb7ff1af6",
                instructor: "c75abfa0-601b-4912-b53c-9a00af2b3d9c",
            },
            {
                id: "5909e5dd-ad14-406e-945d-66b7a4663a85",
                name: "Incidunt rerum placeat molestiae.",
                registrationDate: "2022/8/7",
                duration: 12,
                totalExpense: 10000000,
                majorID: "ae15f6a4-e83d-4007-9b1d-4a2eb7ff1af6",
                instructor: "59a5044f-a1eb-440f-845f-6b6db4619bfd",
            },
            {
                id: "423ca9b9-4cd0-49ea-b5b1-7fab7b0f3b0c",
                name: "Quis enim impedit qui.",
                registrationDate: "2022/12/29",
                duration: 12,
                totalExpense: 10000000,
                majorID: "d7248412-18a4-47d0-8f6d-711779fdd2fe",
                instructor: "fdbb5427-43bb-4dda-b4a8-b406e52529e4",
            },
            {
                id: "719d350a-e2ea-4891-82f0-c3fb66b0447a",
                name: "Mollitia aliquam occaecati aut maiores voluptas adipisci ut eum.",
                registrationDate: "2022/12/3",
                duration: 12,
                totalExpense: 10000000,
                majorID: "7df9072e-16ec-49f2-88e8-8e0e39518a3e",
                instructor: "59a5044f-a1eb-440f-845f-6b6db4619bfd",
            },
            {
                id: "a074c2e9-a773-402d-b5a5-e58b50a858ca",
                name: "Corporis aut repudiandae aut et libero nulla sunt veritatis.",
                registrationDate: "2022/6/27",
                duration: 12,
                totalExpense: 10000000,
                majorID: "d7248412-18a4-47d0-8f6d-711779fdd2fe",
                instructor: "5e67c85c-a2e5-4dfd-be57-b566d5120bb8",
            },
            {
                id: "0d292b13-b452-4b4f-b332-20ad8732ab6d",
                name: "Eius quis sunt autem est incidunt aut officiis repellat.",
                registrationDate: "2022/12/11",
                duration: 12,
                totalExpense: 10000000,
                majorID: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
                instructor: "5ff9f02e-f6cf-484c-8ee5-adc570121673",
            },
            {
                id: "ea057b5c-cf7f-4f63-be11-8d18265155f4",
                name: "Maiores animi quibusdam laborum magnam.",
                registrationDate: "2022/11/6",
                duration: 12,
                totalExpense: 10000000,
                majorID: "c8941ec3-3145-4d4c-b133-8212969c99a7",
                instructor: "3ccf803a-e1a4-4ef0-b507-7101047bd256",
            },
            {
                id: "c09e3ef2-eec9-4710-a66c-72d39687571e",
                name: "Dolore non amet voluptatem et velit.",
                registrationDate: "2022/12/29",
                duration: 12,
                totalExpense: 10000000,
                majorID: "9e1ce23c-4f45-4fec-99bb-f3409bf1307c",
                instructor: "c75abfa0-601b-4912-b53c-9a00af2b3d9c",
            },
            {
                id: "4fe68951-cb58-4a8f-a1b3-4b18ce9597c6",
                name: "Dolores molestiae eum officia vitae voluptatibus reprehenderit id sapiente.",
                registrationDate: "2022/6/12",
                duration: 12,
                totalExpense: 10000000,
                majorID: "ae15f6a4-e83d-4007-9b1d-4a2eb7ff1af6",
                instructor: "59a5044f-a1eb-440f-845f-6b6db4619bfd",
            },
            {
                id: "d092c522-5a03-4e9b-b4c0-ddf6ffc8b7ea",
                name: "Labore accusamus unde et quo est velit quae repudiandae aspernatur.",
                registrationDate: "2022/7/26",
                duration: 12,
                totalExpense: 10000000,
                majorID: "ae15f6a4-e83d-4007-9b1d-4a2eb7ff1af6",
                instructor: "c75abfa0-601b-4912-b53c-9a00af2b3d9c",
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
