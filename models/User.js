module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		type: DataTypes.STRING,
		username: DataTypes.STRING,
		password: DataTypes.STRING,
		isOnline: DataTypes.BOOLEAN,
		referenceID: DataTypes.INTEGER
	}, { freezeTableName: true });
}
