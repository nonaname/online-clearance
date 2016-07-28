module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'student_club',
			{
				studentID: {
					type: DataTypes.INTEGER,
					primaryKey: true
				},
				clubID: {
					type: DataTypes.INTEGER,
					primaryKey: true
				},
				requirement: DataTypes.STRING
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('student_club');
	}
}
