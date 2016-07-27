module.exports = function(sequelize, DataTypes) {
	return sequelize.define('club', {
		name: DataTypes.STRING,
		adviser: DataTypes.STRING
	}, { freezeTableName: true });
}
