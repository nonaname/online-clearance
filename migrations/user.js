module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.createTable(
            'user',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
                first_name: Sequelize.STRING,
                last_name: Sequelize.STRING
            }
        );
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.dropTable('user');
    }
}
