const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define( 'localidad', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        CP:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
    })
}