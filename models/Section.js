module.exports = function(sequelize, DataTypes) {
	return sequelize.define('section', {
		name: DataTypes.STRING,
		adviser: DataTypes.STRING,
		year_level: DataTypes.INTEGER
	}, { freezeTableName: true });
}
