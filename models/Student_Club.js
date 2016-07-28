module.exports = function(sequelize, DataTypes) {
	return sequelize.define('student_club', {
		studentID: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		clubID: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		requirement: DataTypes.STRING
	}, { freezeTableName: true });
}
