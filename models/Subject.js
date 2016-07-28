module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subject', {
		name: DataTypes.STRING
	}, { freezeTableName: true });
}
