module.exports = function(sequelize, DataTypes) {
    var mahasiswa = sequelize.define('Mahasiswa', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        mahasiswa: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        nim: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    mahasiswa.associate = function(models) {
        // models.author.hasMany(models.quote, { foreignKey: "author_id", sourceKey: "id" });
    }

    return mahasiswa;
}
