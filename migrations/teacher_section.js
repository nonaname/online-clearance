module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable(
			'teacher_section',
			{
				teacherID: {
					type: DataTypes.INTEGER,
					primaryKey: true
				},
				sectionID: {
					type: DataTypes.INTEGER,
					primaryKey: true
				},
				requirement: DataTypes.STRING
			}
		);
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('teacher_section');
	}
}
