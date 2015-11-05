"use strict";

module.exports = function (sequelize, DataTypes) {
    let Ward = sequelize.define('Ward', {
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
        tableName: 'ward',
        underscored: true
    });

    return Ward;
};