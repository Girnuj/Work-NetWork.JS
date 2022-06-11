const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define( 'provincia', {
        id:{
            type: DataTypes.CHAR(2),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}