module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'student',
			{
				id: {
					type: Sequelize.STRING,
					primaryKey: true,
					autoIncrement: true
				},
				first_name: Sequelize.STRING,
				last_name: Sequelize.STRING,
				e_mail: Sequelize.STRING,
				createdAt: Sequelize.DATE,
				updatedAt: Sequelize.DATE
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('student');
	}
}
