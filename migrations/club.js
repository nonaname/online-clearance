module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'club',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				name: Sequelize.STRING,
				adviser: Sequelize.STRING,
				createdAt: Sequelize.DATE,
				updatedAt: Sequelize.DATE
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('club');
	}
}
