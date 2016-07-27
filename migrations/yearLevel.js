module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'year_level',
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				info: Sequelize.STRING
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('year_level');
	}
}
