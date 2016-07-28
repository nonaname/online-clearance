module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'section',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				name: Sequelize.STRING,
				adviser: Sequelize.STRING,
				year_level: Sequelize.INTEGER,
				createdAt: Sequelize.DATE,
				updatedAt: Sequelize.DATE
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('section');
	}
}
