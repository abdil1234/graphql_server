module.exports = function(sequelize, DataTypes) {
    var jurusan = sequelize.define('Ref_Jurusan', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'kd_jurusan'
        },        
        jurusan: {
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

    jurusan.associate = function(models) {
        // models.jurusan.belongsTo(models.author, { foreignKey: "author_id", targetKey: "id" });
    }

    return jurusan;
}
