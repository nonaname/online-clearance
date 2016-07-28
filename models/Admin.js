module.exports = function(sequelize, DataTypes) {
	return sequelize.define('admin', {
		name: DataTypes.STRING
	}, { freezeTableName: true });
}
