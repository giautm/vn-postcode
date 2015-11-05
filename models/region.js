"use strict";

module.exports = function (sequelize, DataTypes) {
    let Region = sequelize.define('Region', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                isInt: {
                    msg: 'please input integer value'
                }
            }
        },
        code: {
            type: DataTypes.STRING(6),
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(60),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'region',
        underscored: true
    });

    return Region;
};