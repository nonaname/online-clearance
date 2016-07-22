module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING
    }, { freezeTableName: true });
}
