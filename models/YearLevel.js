module.exports = function(sequelize, DataTypes) {
	return sequelize.define('year_level', {
		info: DataTypes.INTEGER
	}, { freezeTableName: true });
}
