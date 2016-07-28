module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teacher', {
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		e_mail: DataTypes.STRING
	}, { freezeTableName: true });
}
