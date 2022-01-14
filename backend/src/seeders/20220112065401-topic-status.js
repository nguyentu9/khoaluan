"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("topicstatus", [
            {
                id: 1,
                topicID: "423ca9b9-4cd0-49ea-b5b1-7fab7b0f3b0c",
                statusID: 1,
            },
            {
                id: 2,
                topicID: "423ca9b9-4cd0-49ea-b5b1-7fab7b0f3b0c",
                statusID: 2,
            },
            {
                id: 3,
                topicID: "423ca9b9-4cd0-49ea-b5b1-7fab7b0f3b0c",
                statusID: 3,
            },
            {
                id: 4,
                topicID: "423ca9b9-4cd0-49ea-b5b1-7fab7b0f3b0c",
                statusID: 4,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {},
};
