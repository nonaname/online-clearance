module.exports = function(sequelize, DataTypes) {
	return sequelize.define('requirement', {
		type: DataTypes.STRING,
		ReferenceID: DataTypes.INTEGER
	}, { freezeTableName: true });
}
