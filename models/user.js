module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    user.associate = function(models) {
        // models.jurusan.belongsTo(models.author, { foreignKey: "author_id", targetKey: "id" });
    }

    return user;
}
