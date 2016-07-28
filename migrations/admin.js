module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'requirement',
			{
				type: type: Sequelize.STRING,
				referenceID: Sequelize.INTEGER,
				createdAt: Sequelize.DATE,
				updatedAt: Sequelize.DATE
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('requirement');
	}
}
