module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'subject',
			{
				id: {
					type: Sequelize.STRING,
					primaryKey: true,
					autoIncrement: true
				},
				name: Sequelize.STRING
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('subject');
	}
}
