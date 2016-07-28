module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teacher_section', {
		teacherID: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		sectionID: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		requirement: DataTypes.STRING
	}, { freezeTableName: true });
}
