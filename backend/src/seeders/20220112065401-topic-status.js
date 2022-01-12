"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("topicstatus", [
            {
                id: 1,
                topicID: "88ebf964-ca67-4767-a596-4b85075c8037",
                statusID: 1,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {},
};
